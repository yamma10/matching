import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';
import SingleMessage from '../../components/sendmessage/SingleMessage';
import { AuthContext } from '../../state/AuthContext';

import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Avatar
} from "@chatscope/chat-ui-kit-react";

import "./TalkRoom.css"
  

export default function TalkRoom() {


  const { user } = useContext(AuthContext)

  // input欄の管理
  const [message, setMessage] = useState("");
  // トーク履歴の管理
  const [list, setList] = useState([])

  const roomId = useParams().room_id

  const [room , setRoom] = useState([]);

  const [id, setId] = useState(roomId)

  const messageContainerRef = useRef(null);
  // 受け取れた
  // console.log(roomId);

  useEffect(() => {

    const fetchRoom = async () => {
      const Room = await axios.get(`/message/${id}`);
      // console.log(Room.data)
      setRoom(Room.data);
    }
    fetchRoom();



    //通信したいURLを指定
    //CORSの関係でエラーが出るので
    //サーバー側で処理を書く
    const socket = io("https://matchingapi.onrender.com");

    // console.log("a")
    // console.log(id);
    

    //このタイミングでDBから過去のトーク履歴をもってきてほしいと送信
    socket.emit('join', roomId);

    //いままでのトーク履歴がこれに返る
    socket.on('init', (messages) => {
      setList(messages);
    })

    


    //自分や相手がメッセージを送信した際にここに返る
    socket.on('addMessage', (message) => {
      setList(list => [...list, message]);
    })

    // messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;

    //一旦通信を切っている
    return () => {
      socket.disconnect();
    };

    
    
  }, [])//[roomId,list]
  // console.log(data)



  //通信したいURLを指定
  const socket = io("https://matchingapi.onrender.com");

  const handleInputMessage = (e) => {
    e.preventDefault();
    setMessage(e.target.value)
  }

  // socket.on('addMessage', async(message) => {
  //   console.log("返ってきました")
  //   setList(list => [...list, message]);
  // })


  const handleSendMessage = async (e) => {
    e.preventDefault();
    const User = {
      senderId: user._id,
      message: message,
      roomId: roomId 
    }
    socket.emit('send_message', User);
    setMessage("");
    console.log("sousinn")
  }
  
  return (
    <div className="talkroom">
      <div className="container">
        <h2>{ 
            user.username === room.studentName
            ? room.teacherName
            : room.studentName
          }
        </h2>
        <div className='MessageArea' ref={messageContainerRef}>
          {list.map((item,index) => (
          <SingleMessage key={index} item={item} />
        ))}
        </div>
        
        <div className="chatInputButton">
          <input type="text" placeholder='メッセージを入力' onChange={handleInputMessage} value={message}/>
          <button style={{ backgroundColor: message === "" ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,1)"}} disabled={message === ""} onClick={handleSendMessage}>送信する</button>
        </div>
      </div>
    </div>
  )
}



// export default function TalkRoom() {
//   return (
//     <div style={{ position:"relative", height: "500px" }}>
//       <MainContainer>
//         <ChatContainer>       
//           <MessageList>
//             <Message model={{
//                     message: "Hello my friend",
//                     sentTime: "just now",
//                     sender: "Joe"
//                     }} />
//             </MessageList>
//           <MessageInput placeholder="Type message here" />        
//         </ChatContainer>
//       </MainContainer>
//     </div>
//   )
// }
