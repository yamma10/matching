import React, { useState } from 'react'
import "./Direct.css"
import io from "socket.io-client"

//通信したいURLを指定
const socket = io("http://localhost:5000");
//CORSの関係でエラーが出るので
//サーバー側で処理を書く

export default function Direct() {

  const [message, setMessage] = useState("");
  const [list, setList] = useState([])

  const handleSendMessage = () => {
    //serverへ送信
    socket.emit("send_message", {message: message});
    setMessage("");
  }

  //サーバーから受信
  socket.on("received_message", (data) => {
    console.log(data);
    //リストにデータを追加
    setList([...list, data])
  })

  return (
    <div className="direct">
      <div className="container">
        <h2>チャット</h2>
        <div className="chatInputButton">
          <input type="text" placeholder='にちゃあ・・・っと' onChange={(e) => setMessage(e.target.value)}/>
          <button onClick={() => handleSendMessage()}>チャット</button>
        </div>
        {list.map((chat) => (
          <div className="chatArea" key={chat.message}>
            {chat.message}
          </div>
        ))}
      </div>
    </div>
  )
}
