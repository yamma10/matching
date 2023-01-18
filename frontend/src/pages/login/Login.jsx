import React from 'react'
import "./Login.css"

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginTop">
          <h3 className="loginLogo">タイトル</h3>
        </div>
        <div className="loginBottom">
          <div className="loginBox">
            <p className="loginMsg">
              ログインはこちらから
            </p>
            <input
              type="text"
              className="loginInput"
              placeholder="Eメールアドレス"
            />
            <input
              type="text"
              className="loginInput"
              placeholder="パスワード"
            />
            <button className="loginButton">
              ログイン
            </button>
            <button className="loginRegisterButton">
              アカウント作成
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
