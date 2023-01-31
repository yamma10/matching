import { Favorite, MoreVert } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import "./Post.css"
import axios from "axios"
import {format} from "timeago.js";
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../state/AuthContext';

export default function Post({ post }) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const navigation = useNavigate();
  

  const [like, setLike ] = useState(post.likes.length);
  const [ isLiked, setIsLiked ] = useState(false);
  const [user, setUser] = useState({});

  //自分
  const { user: loginUser } = useContext(AuthContext);

  
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users/teacher/${post.userId}`);
      // console.log(response)
      setUser(response.data);
    };
    fetchUser();
  }, []);

  const handleLike = async () => {
    try {
      //いいねのAPIを叩いていく
      await axios.put(`/posts/${post._id}/like`, {userId: loginUser._id});
    } catch (err) {
    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }
  
  const handleSubmit = async () => {
    try {

      const createRoom = {
        student_id: loginUser._id,
        teacher_id: user._id,
        studentName: loginUser.username,
        teacherName: user.username
      }

      const room = await axios.post("/message/room", createRoom);
      const room_id = room.data._id

    
      navigation(`/rooms/${room_id}`)
    } catch (err) {
      alert(err.response.data)
    }
  }

  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user._id}`}>
              <img 
                src={
                  user.profilePicture 
                  ? PUBLIC_FOLDER + user.profilePicture 
                  : PUBLIC_FOLDER + "/person/noAvatar.png"
                } 
                alt="" className="postProfileImg" 
              />
            </Link>
            <span className="postUsername">
              {user.username}
            </span>
            <span className="postDate">
              {format(post.createdAt)}
            </span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
            {post.desc}
          </span>
          {post.img 
          ? <img src={ PUBLIC_FOLDER + post.img}  className="postImg" alt="" />
          :  ""}
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <Favorite htmlColor='red' onClick={
              () => handleLike()
            }/>
            <span className="postLikeCounter">
              {like}人がいいねを押しました
            </span>
          </div>
          <div className="postBottomRight">
            { loginUser.type
              ?  ""
              : <span className="postCommentText" onClick={(e) => handleSubmit(e)}>
            
                  コンタクトをとる
                </span>
            }
            
          </div>
        </div>
      </div>
    </div>
  )
}
