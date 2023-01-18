import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Timeline from '../../components/timeline/Timeline'
import Rightbar from '../../components/rightbar/Rightbar'
import Topbar from '../../components/topbar/Topbar'
import "./Profile.css"

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
              <span className="profileInfoDesc">
                アプリ作成を練習中
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Timeline />
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  );
}
