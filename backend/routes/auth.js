// 認証に関するAPI
const router = require("express").Router();
const Teacher = require("../models/Teacher");
const Student = require("../models/Student");

//生徒ユーザー登録
router.post("/student", async (req, res) => {
  try {
    const newStudent = await new Student({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const user = await newStudent.save();
    return res.status.json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
})

//教師ユーザー登録
router.post("/teacher", async (req, res) => {
  try {
    const newTeacher = await new Teacher({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const user = await newTeacher.save();
    return res.status.json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
})

module.exports = router;