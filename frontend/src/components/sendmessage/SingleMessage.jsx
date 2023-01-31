import { Message } from '@chatscope/chat-ui-kit-react';
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../state/AuthContext'
import "./SingleMessage.css"


export default function SingleMessage({ item }) {
  const { user } = useContext(AuthContext);

  // itemの中身はmessage,senderId,roomId

  

  // console.log(item);
  // console.log(user._id)
  
  return (
    <>
      {
        user._id === item.sender_id
        ? <Message 
          model={{
            message: item.message,
            position: "first",
            direction: "outgoing"
          }}
          />
        : <Message 
          model={{
            message: item.message,
            position: "first",
            direction: "incoming"
          }}
          />
      }
      
    </>
  )
}
