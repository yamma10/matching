//ユーザー情報を格納
const router = require("express").Router();
const Teacher = require("../models/Teacher");
const Student = require("../models/Student");

//CRUD
//ユーザー情報の更新
//学生
router.put("/student/:id", async (req, res) => {
  //params.idは:idの部分
  if (req.body._id === req.params.id) {
    try {
      const student = await Student.findByIdAndUpdate(req.body._id, {
        $set: req.body,
      });
      res.status(200).json("ユーザー情報が更新されました")
    } catch(err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("自分のアカウントだけ更新できます")
  }
})

//教師
router.put("/teacher/:id", async (req, res) => {
  //params.idは:idの部分
  if (req.body._id === req.params.id) {
    try {
      console.log("ok")
      const teacher = await Teacher.findByIdAndUpdate(req.body._id, {
        $set: req.body,
      });
      res.status(200).json("ユーザー情報が更新されました")
    } catch(err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("自分のアカウントだけ更新できます")
  }
})

// ユーザー情報の削除
// 学生
router.delete("/student/:id", async (req, res) => {
  //params.idは:idの部分
  if (req.body.userId === req.params.id) {
    try {
      const student = await Student.findByIdAndDelete(req.params.id);
      res.status(200).json("ユーザー情報が削除されました")
    } catch(err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("自分のアカウント以外を削除することはできません")
  }
})

// 教師
router.delete("/teacher/:id", async (req, res) => {
  //params.idは:idの部分
  if (req.body.userId === req.params.id) {
    try {
      const teacher = await Teacher.findByIdAndDelete(req.params.id);
      res.status(200).json("ユーザー情報が削除されました")
    } catch(err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("自分のアカウント以外を削除することはできません")
  }
})

// ユーザー情報の取得
// 学生
// router.get("/student/:id", async (req, res) => {
//   try {
//     const student = await Student.findById(req.params.id);
//     const { password, updateAt, ...other } = student._doc;
//     res.status(200).json(other);
//   } catch(err) {
//     return res.status(500).json(err);
//   }

// })

//クエリで学生ユーザー情報を取得
router.get("/student/:id", async (req, res) => {
  const userId = req.query.id;
  try {
    const student = userId
     ? await Student.findById(userId)
     : await Student.findOne({ username: username });

    
    res.status(200).json(student);
  } catch(err) {
    return res.status(500).json(err);
  }

})


// 教師
// router.get("/teacher/:id", async (req, res) => {
//   try {
//     const teacher = await Teacher.findById(req.params.id);
//     const { password, updateAt, ...other } = teacher._doc;
//     res.status(200).json(other);
//   } catch(err) {
//     return res.status(500).json(err);
//   }
// })

//クエリで教師ユーザー情報を取得
router.get("/teacher/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const teacher = userId
     ? await Teacher.findById(userId)
     : await Teacher.findOne({ username: username });

    
    res.status(200).json(teacher);
  } catch(err) {
    return res.status(500).json(err);
  }

})

module.exports = router;