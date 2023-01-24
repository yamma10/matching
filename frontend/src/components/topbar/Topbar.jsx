import React from 'react'
import { Chat, Notifications, Search } from "@mui/icons-material"
import "./Topbar.css"
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <span className="logo">
            タイトル
          </span> 
        </Link>
        
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon"/>
          <input
            type="text" 
            className="searchInput"
            placeholder='キーワードを入力してください' />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarItemIcons">
          <div className="topbarIconItem">
            <Link to="/direct" style={{ textDecoration: "none", color: "black"}} >
              <Chat />
            </Link>
            {/* <span className="topbarIconBadge">1</span> */}
          </div>
          <div className="topbarIconItem">
            {/* <Notifications />
            <span className="topbarIconBadge">2</span> */}
          </div>
          <img src="/assets/monster/Icon01.png" alt="" className="topbarImg" />
        </div>
      </div>
    </div>
  );
};
