import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Timeline from '../../components/timeline/Timeline'
import Topbar from '../../components/topbar/Topbar'
import "./Profile.css"
import ProfileDesc from '../../components/profiledesc/ProfileDesc'

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="assets/landscape/Image01.jpeg" alt="" 
                className="profileCoverImg"
               />
               <img
                src="assets/monster/Icon01.png" alt=""
                className="profileUserImg" 
               />
            </div>
            <div className="profileInfo">
              <div className="profileInfoName">
                Yamato
              </div>
              <div className="profileInfoDesc">
                
              </div>
            </div>
          </div>
          <div className="profileRightBottom">
            <Timeline />
            <ProfileDesc  state/>
          </div>
        </div>
      </div>
    </>
  );
}
