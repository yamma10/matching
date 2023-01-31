import { Home, Message, Person, Settings } from '@mui/icons-material'
import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import "./Sidebar.css"
import { AuthContext } from '../../state/AuthContext';
import Profile from '../../pages/profile/Profile';

export default function Sidebar() {
  const { user } = useContext(AuthContext)
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <Link to="/home" style={{ textDecoration: "none", color: "black"}}>
            <li className="sidebarListItem">
              <Home className='sidebarIcon' />
              
                <span className="sidebarListItemText">
                  ホーム
                </span>
            </li>
          </Link>
          <Link to="/direct" style={{ textDecoration: "none", color: "black"}}>
            <li className="sidebarListItem">
              <Message className='sidebarIcon' />
              
                <span className="sidebarListItemText">
                  メッセージ
                </span>
            </li>
          </Link>
          { user.type 
          ? <Link to={`/profile/${user._id}` } style={{ textDecoration: "none", color: "black"}} element={<Profile />}><li className="sidebarListItem">            <Person className='sidebarIcon' />
              <span className="sidebarListItemText">
                プロフィール
              </span>
            </li></Link> : ""}

          <Link to="/settings" style={{ textDecoration: "none", color: "black"}}>
            <li className="sidebarListItem">
              <Settings className='sidebarIcon' />
                <span className="sidebarListItemText">
                  設定
                </span>
              
            </li>
          </Link>
        </ul>
        <hr className="sidebarHr" />
      </div>
    </div>
  )
}
