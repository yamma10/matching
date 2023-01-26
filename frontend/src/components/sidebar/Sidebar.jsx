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

          { user.type ? <li className="sidebarListItem">
            <Person className='sidebarIcon' />
            <Link to={`/profile/${user._id}` } style={{ textDecoration: "none", color: "black"}} element={<Profile />} >
              <span className="sidebarListItemText">
                プロフィール
              </span>
            </Link>
            
          </li> : ""}
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
