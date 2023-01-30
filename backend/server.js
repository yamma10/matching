const express = require("express");
const app = express();
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")
const uploadRoute = require("./routes/upload");
const messageRoute = require("./routes/messages")

const Message = require("./models/Message");

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
  // console.log("connecting");
  // Messageテーブルからroom_idをキーにしてメッセージを取り出す
  socket.on('join', async (room_id) => {
    socket.join(room_id);
    const messages = await Message.find({
      room_id: room_id
    })

    const messageList = await Promise.all(messages.map((message) => {
      return {
        message: message.message,
        sender_id: message.sender_id
      }
    }));

    // console.log(room_id)
    io.to(room_id).emit('init', messageList);
  })
  

  //クライアントから受信
  socket.on("send_message", async (data) => {
    try {
      socket.join(data.roomId);
      const newMessage = new Message({
        sender_id: data.senderId,
        message: data.message,
        room_id: data.roomId
      });
      const message = await newMessage.save();
      // console.log(data.message);
      // console.log(data.senderId)
      // console.log(data.roomId);
      io.to(data.roomId).emit('addMessage',{
        message: data.message,
        sender_id: data.senderId
      })
    } catch(err) {
      console.log(err)
    }
    
    //クライアントへ送信
    // io.emit("received_message", {
    //   message: data.message,
    //   sender_id: data.senderId
    // });
  })
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
app.use("/api/message", messageRoute);




server.listen(PORT, () => console.log("サーバーが起動しました"))