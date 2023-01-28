import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { AuthContext } from '../../state/AuthContext'
import "./Room.css"

export default function ({ name }) {

  const { user } = useContext(AuthContext);

  const [message, setMessage] = useState([]);

  useEffect(() => {
    const getMessage =  async() => {
      try {
        if (user.type) {
          const message = await axios.get(`/message/latest/student/${name}`);
          setMessage(message.data.message)
        } else {
          const message = await axios.get(`/message/latest/teacher/${name}`)
          setMessage(message.data.message)
        }
      } catch (err) {
        console.log(err);
      }
    }
    getMessage();
  }, [])

  console.log(message);

  return (
    <>
      <p>{name}</p>
      <p class="message">{message}</p>
    </>
  )
}
