const router = require("express").Router();
const Teacher = require("../models/Teacher");
const Student = require("../models/Student");
const Room = require("../models/Room");
const Message = require("../models/Message");

//個人間のメッセージに関するAPI作成

// トークルームの作成
router.post("/room", async (req, res) => {
  const studentId = req.body.student_id;
  try {
    const check = await Student.findOne({_id: studentId});
    if (!check) {
      res.status(404).send("生徒アカウントのみトークルームを作成できます");
    }
    const teacherId = req.body.teacher_id
    //ここまで
    //二人の部屋が存在するかチェック
    const checkroom =  await Room.find({
      student_id: studentId,
      teacher_id: teacherId,
    })
    if(checkroom.length){
      return res.status(403).send("トークルームはすでに存在しています")
    }
    const newRoom = await new Room({
      student_id: studentId,
      teacher_id: teacherId,
      studentName: req.body.studentName,
      teacherName: req.body.teacherName
    })
    
    const room = await newRoom.save();
    return res.status(200).json(room);
  } catch (err) {
    return res.status(500).json(err);
  }
})

// RoomのIDと相手の名前取得
router.post("/getid", async (req, res) => {
  try {
    const myType = req.body.type;
    const _id = req.body._id;
    // console.log(_id)
    // console.log(myType)
    if(myType) {
      const Rooms = await Room.find({
        teacher_id: _id
      }).sort({ updateAt: -1});
      return res.status(200).json(Rooms);
    } else {
      try {
        const Rooms = await Room.find({
        student_id: _id
        }).sort({ updateAt: -1});
        return res.status(200).json(Rooms);
        
      } catch (err) {
        return res.status(500).json(err);
      }
      
      
    }
  } catch (err) {
    return res.status(500).json(err);
  }
})

//メッセージをDBに保存する
router.post("/send", async (req, res) => {
  try {
    const sender_id = req.body.senderId;
    const room_id = req.body.roomId;
    const message = req.body.message;
    const newMessage = await new Message({
      sender_id: sender_id,
      room_id: room_id,
      message: message
    })
    //roomをメッセージ順で更新したいのでupdateAtを更新する
    const now = new Date();
    const check = await Room.updateOne(
      {
      _id: newMessage. room_id
      },
      {
        $set: {
          updatedAt: now
        }
      }
    )
    const ok = await newMessage.save();
    return res.status(200).json(ok);
  } catch (err) {
    return res.status(500).json(err);
  }
})

//過去のメッセージを取得
router.get("/receive/:id", async (req, res) => {
  try {
    const room_id = req.params.id;
    // console.log(room_id);
    const messages = await Message.find({
      room_id: room_id
    })
    // console.log(messages);
    return res.status(200).json(messages);
  } catch (err) {
    return res.status(500).json(err);
  }
})

//directで最新のメッセージを表示する
//studentNameから探す
router.get("/latest/student/:username", async (req, res) => {
  try {
    const username = req.params.username;
    const rooms = await Room.find({
      studentName: username
    })
    console.log(rooms);
    const room = rooms[0]
    const latestMessage = await Message.find({
      room_id: room._id
    }).sort({createdAt: -1}).limit(1)
    // console.log(latestMessage[0])
    return res.status(200).json(latestMessage.message[0])
  } catch(err) {
    return res.status(500).json(err);
  }
})

//TeacherNameから探す
router.get("/latest/teacher/:username", async (req, res) => {
  try {
    const username = req.params.username;
    const rooms = await Room.find({
      teacherName: username
    })
    console.log("caled")
    const room = rooms[0];
    const latestMessage = await Message.find({
      room_id: room._id
    }).sort({createdAt: -1}).limit(1)
    // console.log(latestMessage[0]);
    return res.status(200).json(latestMessage[0])
  } catch(err) {
    return res.status(500).json(err);
  }
})



module.exports = router;