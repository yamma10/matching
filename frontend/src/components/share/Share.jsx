import { Image } from '@mui/icons-material'
import React, { useContext } from 'react'
import "./Share.css"
import { AuthContext } from "../../state/AuthContext";

export default function Share() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const { user } = useContext(AuthContext);

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src={
            user.profilePicture
              ? PUBLIC_FOLDER + user.profilePicture
              : PUBLIC_FOLDER + "/person/noAvatar.png"
          }alt="" className="shareProfileImg" />
          <textarea cols="20" rows="5" className="shareInput" placeholder='投稿内容'></textarea>
        </div>
        <hr className="shareHr" />
        <div className="shareButtons">
          <div className="shareOptions">
            <div className="shareOption">
              <Image
                className="shareIcon" htmlColor='blue'
                />
              <span className="shareOptionText">
                写真
              </span>
            </div>
          </div>
          <button className="shareButton">
            投稿
          </button>
        </div>
      </div>
    </div>
  )
}
