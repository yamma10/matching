import { Favorite, MoreVert } from '@mui/icons-material'
import React from 'react'
import "./Post.css"

export default function () {
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="assets/monster/Icon01.png" alt="" className="postProfileImg" />
            <span className="postUsername">
              Yamato
            </span>
            <span className="postDate">
              5分前
            </span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
            snsを自作中です。
          </span>
          <img src="./assets/image/Image01.png" alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <Favorite htmlColor='red'/>
            <span className="postLikeCounter">
              5人がいいねを押しました
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">
              
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
