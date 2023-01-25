import { Image } from '@mui/icons-material'
import React, { useContext, useRef } from 'react'
import "./Share.css"
import { AuthContext } from "../../state/AuthContext";
import axios from 'axios';

export default function Share() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const { user } = useContext(AuthContext);
  const desc = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src={
            user.profilePicture
              ? PUBLIC_FOLDER + user.profilePicture
              : PUBLIC_FOLDER + "/person/noAvatar.png"
          }alt="" className="shareProfileImg" />
          <textarea cols="20" rows="5" className="shareInput" placeholder='投稿内容' ref={desc} ></textarea>
        </div>
        <hr className="shareHr" />
        <form className="shareButtons" onSubmit={(e) => handleSubmit(e)}>
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
          <button className="shareButton" type="submit">
            投稿
          </button>
        </form>
      </div>
    </div>
  )
}
