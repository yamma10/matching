import React from 'react'
import "./Register.css"

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginTop">
          <h3 className="loginLogo">タイトル</h3>
        </div>
        <div className="loginBottom">
          <div className="loginBox">
            <p className="loginMsg">
              新規登録はこちら
            </p>
            <input
              type="text"
              className="loginInput"
              placeholder="ユーザー名"
            />
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
            <input
              type="text"
              className="loginInput"
              placeholder="確認用パスワード"
            />
            <button className="loginButton">
              サインアップ
            </button>
            <button className="loginRegisterButton">
              ログイン
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
