import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { AuthContext } from '../../state/AuthContext'
import "./Room.css"
//トークルームのうちの1つのルーム
export default function ({Id}) {


  // console.log(Id)
  const { user } = useContext(AuthContext);

  const [data, setData] = useState([]);

  useEffect(() => {
   const fetchData = async () => {
    try {
      
      const Data = await axios.get(`/message/latest/${Id}`);
      // console.log(Data.data);
      setData(Data.data)
    } catch (err) {
      console.log(err);
    }
    
   }
   fetchData();
  }, [])


  return (
    <div className="room-card" >
      { user.username === data.studentName 
      ? <p>{data.teacherName}</p>
      : <p>{data.studentName}</p>
      }
      {/* <p>{Data.name}</p> */}
      <p className="message">{data.message}</p>
    </div>
  )
}
