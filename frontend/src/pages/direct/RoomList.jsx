import React, { useContext, useEffect, useState } from 'react'

import io from "socket.io-client"
import { AuthContext } from '../../state/AuthContext';
import axios from 'axios';
import "./RoomList.css"
import Room from '../../components/room/Room';
import { Link } from 'react-router-dom';



export default function RoomList() {

  const { user } = useContext(AuthContext);
  
  const [rooms, setRooms] = useState([]);

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
        // console.log(res)
        setRooms(res.data);
      // console.log(response)
      };
      fetchRooms();
    } catch(err) {
      console.log(err);
    }
  }, []);
    
  return (
    <div className="roomscontainer">
      <div className="title">
        <h1>メッセージ</h1>
      </div>
      <div className="roomsWrapper">
        {rooms.map(room => (
          <Link to={`/talkroom/${room._id}`} style={{ textDecoration: "none", color: "black"}} >
            <div className="room-card" key={room._id}>
              {room.studentName === user.username 
                ? <Room name={room.teacherName} />
                : <Room name={room.studentName} />
              }
            </div>
          </Link>
        ))}
      </div>
    
  </div>
);
}
