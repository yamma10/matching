import React, { useContext, useEffect, useState } from 'react'

import io from "socket.io-client"
import { AuthContext } from '../../state/AuthContext';
import axios from 'axios';

//通信したいURLを指定
const socket = io("http://localhost:5000");
//CORSの関係でエラーが出るので
//サーバー側で処理を書く

export default function Direct() {

  const { user } = useContext(AuthContext);
  
  useEffect(() => {
    try {
      const fetchRooms = async () => {
        const _id = user._id
        const type = user.type
      const getroom = {
        _id: _id,
        type: type
      }
      const res = await axios.post(`/message/getid`, getroom);
      console.log(res)
      // console.log(response)
    };
     fetchRooms();

    } catch(err) {
      console.log(err);
    }
    
  }, []);
    
  return (
    <div className="direct">
      <div className="directWrapper">
        <span>hello</span>
      </div>
    </div>
  )
}
