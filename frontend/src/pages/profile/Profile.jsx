import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Timeline from '../../components/timeline/Timeline'
import Topbar from '../../components/topbar/Topbar'
import "./Profile.css"
import ProfileDesc from '../../components/profiledesc/ProfileDesc'
import axios from "axios"
import { useParams } from "react-router-dom";

export default function Profile({}) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const [user, setUser] = useState({});
  const username = useParams().username;

  
  useEffect(() => {
    const fetchUser = async () => {
      console.log("start")
      const response = await axios.get(`/users?username=${username}`);
      // console.log(response);
      setUser(response.data);
    };
    fetchUser();
  }, [username]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={PUBLIC_FOLDER + "/landscape/Image01.jpeg"} alt="" 
                className="profileCoverImg"
               />
              <img src={user.profilePicture
              ? PUBLIC_FOLDER + user.profilePicture
              : PUBLIC_FOLDER + "/person/noAvatar.png"} alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
              <div className="profileInfoName">
                {user.username}
              </div>
              <div className="profileInfoDesc">
                
              </div>
            </div>
          </div>
          <div className="profileRightBottom">
            <Timeline username={username}/>
            <ProfileDesc  state/>
          </div>
        </div>
      </div>
    </>
  );
}
