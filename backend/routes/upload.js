const router = require("express").Router();
const multer = require("multer");

const storage = multer.diskStorage({
  // 保存先を決定:public/imagesに保存する
  destination: (req, fle, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

//保存先を変えるときはstorageをいじる
const upload = multer({ storage });
//画像アップロード用API
router.post("/", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("画像アップロードに成功しました")
  } catch(err) {
    console.log(err);
  }
});

module.exports = router;