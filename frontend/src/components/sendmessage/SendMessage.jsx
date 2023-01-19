import React, { useState } from 'react'
import "./SendMessage.css"
import { Input } from "@mui/material";


export default function SendMessage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  
  //わからないところ
  //送ったメッセージを表示するときに、送ったメッセージがぽこんと下から出てくる感じにしたい（毎回レンダリングがはしることなく）
  //メッセージのテーブル設計はどのようにすればいいのか？
  

  function sendMessage(e) {
    e.preventDefault();
    setMessages(e.target.value);
    setMessage("");

  }
  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <Input
            placeholder="メッセージを入力してください"
            type="text"
            onChange={(e) => setMessage(e.target.value) }

          />
          {/* <SendIcon /> */}
        </div>
      </form>
    </div>
  )
}
