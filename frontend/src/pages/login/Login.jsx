import React from 'react'
import "./Login.css"
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';

export default function Login() {

  const StudentLogin = () => {
    return (
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
            <Link to="/register" className='register' >
              <button className="loginRegisterButton">
                アカウント作成
              </button>
            </Link>
          </div>
        </div>
    )
  }

  const TeacherLogin = () => {
    return (
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
            <Link to="/register" className='register' >
              <button className="loginRegisterButton">
                アカウント作成
              </button>
            </Link>
          </div>
        </div>
    )
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginTop">
          <h3 className="loginLogo">タイトル</h3>
        </div>
        {/* ここからTabで囲む */}
        <Tabs style={{textAlign: 'center'}}>
          <TabList>
            <Tab>生徒ログイン</Tab>
            <Tab>教師ログイン</Tab>
          </TabList>

          <TabPanel>
            <StudentLogin />
          </TabPanel>
          <TabPanel>
            <TeacherLogin />
          </TabPanel>
        </Tabs>

      </div>
    </div>
  )
}
