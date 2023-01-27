const mongoose = require("mongoose");

//投稿を作成する
const PostSchema = new mongoose.Schema({
  //誰が投稿したのかという情報
  userId: {
    type: String,
    required: true,
  },
  //description(テキスト内容=つぶやき)
  desc: {
    type: String,
    max: 200,
  },
  //画像へのパスを指定する
  img: {
    type: String,
  },
  //いいね機能
  likes: {
    type: Array,
    default: []
  },
},
{ timestamps: true }
);



//これを書くことによってほかのファイルでも使えるようにする
module.exports = mongoose.model("Post", PostSchema);