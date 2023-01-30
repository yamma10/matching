import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { AuthContext } from '../../state/AuthContext'
import "./Room.css"
//トークルームのうちの1つのルーム
export default function ({ name }) {


  const { user } = useContext(AuthContext);

  const [message, setMessage] = useState([]);

  useEffect(() => {
    const getMessage =  async() => {
      try {
        if (user.type) {
          console.log(name);
          const message = await axios.get(`/message/latest/student/${name}`);
          console.log(message)
          setMessage(message.data.message)
        } else {
          console.log(name);
          const message = await axios.get(`/message/latest/teacher/${name}`)
          console.log(message);
          setMessage(message.data.message)
        }
      } catch (err) {
        console.log(err);
      }
    }
    getMessage();
  }, [])


  return (
    <>
      <p>{name}</p>
      <p className="message">{message}</p>
    </>
  )
}
