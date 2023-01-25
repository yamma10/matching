import { Image } from '@mui/icons-material'
import React from 'react'
import "./Share.css"

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/monster/Icon01.png" alt="" className="shareProfileImg" />
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
