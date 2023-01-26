const express = require("express");
const app = express();
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")
const uploadRoute = require("./routes/upload");

const PORT = 5000;
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

//Socket.io
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
//Serverインスタンスを作成
const io = new Server(server, {
  //originプロパティで指定したURL空の接続を許可する
  cors: {
    origin: ["http://localhost:3000"]
  }
});
//クライアントと通信
io.on("connection", (socket) => {
  // console.log("クライアントと接続しました");

  //クライアントから受信
  socket.on("send_message", (data) => {
    console.log(data.message.message);

    //クライアントへ送信
    io.emit("received_message", data.message);
  })

  //通信が切れたとき
  // socket.on("disconnect", () => {
  //   console.log('クライアントと接続が切れました');
  // })
})


//データベース接続
mongoose.connect(process.env.MONGOURL).then(() => {
  console.log("DBと接続中です");
}).catch((err) => {
  console.log("DBとの接続に失敗しました")
  console.log(err)
});

//ミドルウェア
app.use(express.json());
// /imagesが指定されたとき静的ファイルの場合public/imagesまで見に行く
app.use("/images", express.static(path.join(__dirname, "public/images")));
//  第1引数をルートとして設定する
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/upload", uploadRoute);




server.listen(PORT, () => console.log("サーバーが起動しました"))