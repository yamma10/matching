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
        setRooms(res.data.sort((room1, room2) => {
          return new Date(room2.updatedAt) - new Date (room1.updatedAt);
        })
        );
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
        {rooms.map((room, index) => (
          <Link to={`/talkroom/${room._id}`} style={{ textDecoration: "none", color: "black"}} key={index} >
              {/* {room.studentName === user.username 
                ? <Room name={room.teacherName} />
                : <Room name={room.studentName} />
              } */}
              <Room Id={room._id}  key={index}/>
          </Link>
        ))}
      </div>
    
  </div>
);
}
