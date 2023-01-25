// 認証に関するAPI
const router = require("express").Router();
const Teacher = require("../models/Teacher");
const Student = require("../models/Student");

//生徒ユーザー登録
router.post("/student", async (req, res) => {
  try {
    const check = await Student.findOne({email: req.body.email});
    if (check) return res.status(404).send("このユーザーは存在しています");
    const newStudent = await new Student({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const student = await newStudent.save();
    return res.status(200).json(student);
  } catch (err) {
    return res.status(500).json(err);
  }
})

//教師ユーザー登録
router.post("/teacher", async (req, res) => {
  try {
    const check = await Teacher.findOne({email: req.body.email});
    if (check) return res.status(404).send("このユーザーは存在しています");
    const newTeacher = await new Teacher({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const teacher = await newTeacher.save();
    console.log("ok")
    return res.status(200).json(teacher);
  } catch (err) {
    return res.status(500).json(err);
  }
})

//生徒ログイン
router.post("/student/login", async (req, res) => {
  try {
    const student = await Student.findOne({email: req.body.email});
    if (!student) return res.status(404).send("ユーザーが見つかりません");

    const vailedPassword = req.body.password === student.password;
    if (!vailedPassword) return res.status(400).json("パスワードが違います");

    return res.status(200).json(student);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//教師ログイン
router.post("/teacher/login", async (req, res) => {
  try {
    const teacher = await Teacher.findOne({email: req.body.email});
    if (!teacher) return res.status(404).send("ユーザーが見つかりません");

    const vailedPassword = req.body.password === teacher.password;
    if (!vailedPassword) return res.status(400).json("パスワードが違います");

    return res.status(200).json(teacher);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;