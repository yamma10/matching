import { Home, Message, Person, Search, Settings } from '@mui/icons-material'
import { Link } from "react-router-dom";
import React from 'react';
import "./Sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Home className='sidebarIcon' />
            <Link to="/home" style={{ textDecoration: "none", color: "black"}}>
              <span className="sidebarListItemText">
                ホーム
              </span>
            </Link>
            
          </li>
          <li className="sidebarListItem">
            <Message className='sidebarIcon' />
            <Link to="/direct" style={{ textDecoration: "none", color: "black"}}>
              <span className="sidebarListItemText">
                メッセージ
              </span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Person className='sidebarIcon' />
            <Link to="/profile/yamato" style={{ textDecoration: "none", color: "black"}}>
              <span className="sidebarListItemText">
                プロフィール
              </span>
            </Link>
            
          </li>
          <li className="sidebarListItem">
            <Settings className='sidebarIcon' />
            <Link to="/settings" style={{ textDecoration: "none", color: "black"}}>
              <span className="sidebarListItemText">
                設定
              </span>
            </Link>
          </li>
        </ul>
        <hr className="sidebarHr" />
      </div>
    </div>
  )
}
