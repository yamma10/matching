import React from 'react'
import { useParams } from 'react-router-dom';

import "./Rooms.css"

export default function Rooms({ state }) {

  const roomId = useParams().room_id

  console.log(roomId);
  
  return (
    <div>Rooms</div>
  )
}
