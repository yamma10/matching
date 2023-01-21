const express = require("express");
const app = express();
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")
const PORT = 5000;
const mongoose = require("mongoose");
require("dotenv").config();

//Socket.io
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
//第2引数で通信を許可
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"]
  }
});
//クライアントと通信
io.on("connection", (socket) => {
  // console.log("クライアントと接続しました");

  //クライアントから受信
  socket.on("send_message", (data) => {
    console.log(data);

    //クライアントへ送信
    io.emit("received_message", data);
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
//  第1引数をルートとして設定する
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute)


server.listen(PORT, () => console.log("サーバーが起動しました"))