import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';
import { AuthContext } from '../../state/AuthContext';

import "./TalkRoom.css"
  //通信したいURLを指定
  const socket = io("http://localhost:5000");
  //CORSの関係でエラーが出るので
  //サーバー側で処理を書く

export default function TalkRoom() {

  const roomId = useParams().room_id

  // 受け取れた
  // console.log(roomId);

  useEffect(() => {
    const fetchMessages = async () => {
      const Messages = await axios.get(`/message/receive/${roomId}`);
      console.log(Messages);
    }
    fetchMessages();
  }, [])


  const { user } = useContext(AuthContext)

  const [message, setMessage] = useState("");
  const [list, setList] = useState([])

  //送信した段階でAPIを叩いてDBに登録
  const handleSendMessage = () => {
    const User = {
      _id: user._id,
      message: message
    }
    //serverへ送信
    socket.emit("send_message", {message: User});
    setMessage("");
    console.log("sousinn")
  }

  //サーバーから受信
  socket.on("received_message", (data) => {
    console.log(data);
    
    //リストにデータを追加
    setList([...list, data])
  })
  
  return (
    <div className="talkroom">
      <div className="container">
        <h2>チャット</h2>
        <div className="chatInputButton">
          <input type="text" placeholder='にちゃあ・・・っと' onChange={(e) => setMessage(e.target.value)} value={message}/>
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
