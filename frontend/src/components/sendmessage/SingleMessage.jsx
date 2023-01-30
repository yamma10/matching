import React, { useContext, useState } from 'react'
import { AuthContext } from '../../state/AuthContext'
import "./SingleMessage.css"


export default function SingleMessage({ item }) {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="chatArea" >
            {item.message}
      </div>
    </>
  )
}
