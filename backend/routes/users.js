//ユーザー情報を格納
const router = require("express").Router();

//生徒ユーザー登録
router.post("/registerstudent", (req, res) => {
  try {
    
  } catch (err) {
    return res.status(500).json(err);
  }
})

module.exports = router;