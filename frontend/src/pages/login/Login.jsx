import React from 'react'
import "./Login.css"
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';
import { useRef } from 'react';
import { studentLoginCall, teacherLoginCall } from '../../actionCalls';
import { useContext } from 'react';
import { AuthContext } from '../../state/AuthContext';

export default function Login() {


  const StudentLogin = () => {
    const email = useRef();
    const password = useRef();

    const { user, isFetching, error, dispatch} = useContext(AuthContext);

    const handleSubmit = (e) => {
      e.preventDefault();
      studentLoginCall(
        {
          email: email.current.value,
          password: password.current.value,
        }, 
        dispatch
      );
    };


    return (
      <div className="loginBottom">
          <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
            <p className="loginMsg">
              ログインはこちらから
            </p>
            <input
              type="email"
              className="loginInput"
              placeholder="メールアドレス"
              required
              ref={email}
            />
            <input
              type="password"
              className="loginInput"
              placeholder="パスワード"
              required
              minLength="6"
              ref={password}
            />
            <button className="loginButton">
              ログイン
            </button>
            <Link to="/register" className='register' >
              <button className="loginRegisterButton">
                アカウント作成
              </button>
            </Link>
          </form>
        </div>
    )
  }

  const TeacherLogin = () => {
    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch} = useContext(AuthContext);

    const handleSubmit = (e) => {
      e.preventDefault();
      teacherLoginCall(
        {
          email: email.current.value,
          password: password.current.value,
        }, 
        dispatch
      );
    };

    return (
      <div className="loginBottom">
          <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
            <p className="loginMsg">
              ログインはこちらから
            </p>
            <input
              type="email"
              className="loginInput"
              placeholder="メールアドレス"
              required
              ref={email}
            />
            <input
              type="password"
              className="loginInput"
              placeholder="パスワード"
              required
              minLength="6"
              ref={password}
            />
            <button className="loginButton">
              ログイン
            </button>
            <Link to="/register" className='register' >
              <button className="loginRegisterButton">
                アカウント作成
              </button>
            </Link>
          </form>
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
