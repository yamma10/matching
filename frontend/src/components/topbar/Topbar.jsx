import React, { useContext } from 'react'
import { Chat, Notifications, Search } from "@mui/icons-material"
import "./Topbar.css"
import { Link } from "react-router-dom";
import { AuthContext }  from "../../state/AuthContext"

export default function Topbar() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const {user} = useContext(AuthContext)

  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <span className="logo">
            佐賀でサガそう
          </span> 
        </Link>
        
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          {/* <Search className="searchIcon"/>
          <input
            type="text" 
            className="searchInput"
            placeholder='キーワードを入力してください' /> */}
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
          {user.type 
          ? <Link to={`/profile/${user._id}`} type="text/css">
            <img src={ user.profilePicture 
              ? PUBLIC_FOLDER + user.profilePicture
              : PUBLIC_FOLDER + "/person/noAvatar.png"
            }alt="" className="topbarImg" />
          </Link> 
          : <img src={ user.profilePicture 
              ? PUBLIC_FOLDER + user.profilePicture
              : PUBLIC_FOLDER + "/person/noAvatar.png"
            }alt="" className="topbarImg" /> }
        </div>
      </div>
    </div>
  );
};
