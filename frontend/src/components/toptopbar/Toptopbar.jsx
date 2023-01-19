import React from 'react'
import "./Toptopbar.css"
import { Search } from "@mui/icons-material"

export default function Toptopbar() {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className="logo">タイトル</span>
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
            <span className="loginButton">
              ログイン
            </span>
            
          </div>
          <div className="topbarIconItem">
            <span className='registerButton'>新規登録</span>
            
          </div>
        </div>
      </div>
    </div>
  );
}
