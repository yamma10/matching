const router = require("express").Router();
const Teacher = require("../models/Teacher");
const Student = require("../models/Student");
const Room = require("../models/Room")

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
      teacher_id: teacherId
    })
    if(checkroom.length){
      return res.status(403).send("トークルームはすでに存在しています")
    }
    const newRoom = await new Room({
      student_id: studentId,
      teacher_id: teacherId
    })
    
    const room = await newRoom.save();
    return res.status(200).json(room);
  } catch (err) {
    return res.status(500).json(err);
  }
})

// RoomのIDと相手の名前取得
router.get("/hand", async (req, res) => {
  try {
    const myType = req.body.type;
    const _id = req.body._id;
    console.log(myType)
    if(myType) {
      const Rooms = await Room.find({
        teacher_id: _id
      });
      return res.status(200).json(Rooms);
    } else {
      const Rooms = await Room.find({
        student_id: _id
      })
      return res.status(200).json(Rooms);
    }
  } catch (err) {
    return res.status(500).json(err);
  }
})




// メッセージの投稿
// router.post("/messages", async (req, res) => {
//   try {
//     const room = await Room.findOne({})
//   } catch (err) {
//     return res.status(500).json(err);
//   }
// })

module.exports = router;