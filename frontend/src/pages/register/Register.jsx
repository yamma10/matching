import React, { useRef } from 'react'
import styles from "./Register.module.css"
import { Link, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';
import axios from 'axios';

export default function Register() {

  

  const  TeacherRegister = () => {

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordConfirmation = useRef();

    const navigate = useNavigate();

    const handleSubmit = async(e) => {
      e.preventDefault();

      //パスワードと確認用パスワードがあっているか確認
      if (password.current.value !== passwordConfirmation.current.value) {
        passwordConfirmation.current.setCustomValidity("パスワードが違います");
      } else {
          try {
            
            const teacher = {
              username: username.current.value,
              email: email.current.value,
              password: password.current.value
            };
            //registerAPI
            await axios.post("auth/teacher", teacher)
            navigate("/login");
          } catch (error) {
            if (error.response && error.response.data) {
              alert(error.response.data);
            }
          }
        }
    };
    
  return (
    <div className={styles.loginBottom}>
        <form className={styles.loginBox} onSubmit={(e) => handleSubmit(e)}>
          <p className={styles.loginMsg}>
            教師新規登録はこちら
          </p>
          <input
            type="text"
            className={styles.loginInput}
            placeholder="ユーザー名"
            required
            ref={username}
          />
          <input
            type="email"
            className={styles.loginInput}
            placeholder="メールアドレス"
            required
            ref={email}
          />
          <input
            type="password"
            className={styles.loginInput}
            placeholder="パスワード"
            required
            ref={password}
          />
          <input
            type="password"
            className={styles.loginInput}
            placeholder="確認用パスワード"
            ref={passwordConfirmation}
          />
          <button className={styles.loginButton} >
            サインアップ
          </button>
          <Link to="/login"  >
            <button className={styles.loginRegisterButton}>
              ログイン
            </button>
          </Link>
        </form>
      </div>
    )
  }
  const  StudentRegister = () => {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordConfirmation = useRef();

    const navigate = useNavigate();

    const handleSubmit = async(e) => {
      e.preventDefault();
        //パスワードと確認用パスワードがあっているか確認
      if (password.current.value !== passwordConfirmation.current.value) {
        passwordConfirmation.current.setCustomValidity("パスワードが違います");
      } else {
          try {
            
            const student = {
              username: username.current.value,
              email: email.current.value,
              password: password.current.value
            };
            //registerAPI
            await axios.post("auth/student", student)
            navigate("/login")
          } catch (error) {
            if (error.response && error.response.data) {
              alert(error.response.data);
            }
          }
        }
    };

    return (
      <div className={styles.loginBottom}>
          <form className={styles.loginBox} onSubmit={(e) => handleSubmit(e)}>
            <p className={styles.loginMsg}>
              生徒新規登録はこちら
            </p>
            <input
              type="text"
              className={styles.loginInput}
              placeholder="ユーザー名"
              required
              ref={username}
            />
            <input
              type="email"
              className={styles.loginInput}
              placeholder="メールアドレス"
              required
              ref={email}
            />
            <input
              type="password"
              className={styles.loginInput}
              placeholder="パスワード"
              required
              minLength="6"
              ref={password}
            />
            <input
              type="password"
              className={styles.loginInput}
              placeholder="確認用パスワード"
              required
              minLength="6"
              ref={passwordConfirmation}
            />
            <button className={styles.loginButton} onSubmit={(e) => handleSubmit(e)}>
              サインアップ
            </button>
            <Link to="/login"  >
              <button className={styles.loginRegisterButton} >
                ログイン
              </button>
            </Link>
          </form>
        </div>
    )
  }
  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <div className={styles.loginTop}>
          <h3 className={styles.loginLogo}>タイトル</h3>
        </div>
        {/* ここからTabで囲む */}
        <Tabs style={{textAlign: 'center'}}>
          <TabList>
            <Tab>生徒登録</Tab>
            <Tab>教師登録</Tab>
          </TabList>
          <TabPanel>
            <StudentRegister />
          </TabPanel>
          <TabPanel>
            <TeacherRegister />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}
