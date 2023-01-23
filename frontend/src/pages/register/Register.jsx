import React from 'react'
import styles from "./Register.module.css"
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';

export default function Register() {
  const  TeacherRegister = () => {
    return (
      <div className={styles.loginBottom}>
          <div className={styles.loginBox}>
            <p className={styles.loginMsg}>
              教師新規登録はこちら
            </p>
            <input
              type="text"
              className={styles.loginInput}
              placeholder="ユーザー名"
            />
            <input
              type="text"
              className={styles.loginInput}
              placeholder="メールアドレス"
            />
            <input
              type="text"
              className={styles.loginInput}
              placeholder="パスワード"
            />
            <input
              type="text"
              className={styles.loginInput}
              placeholder="確認用パスワード"
            />
            <button className={styles.loginButton}>
              サインアップ
            </button>
            <Link to="/login"  >
              <button className={styles.loginRegisterButton}>
                ログイン
              </button>
            </Link>
          </div>
        </div>
    )
  }
  const  StudentRegister = () => {
    return (
      <div className={styles.loginBottom}>
          <div className={styles.loginBox}>
            <p className={styles.loginMsg}>
              生徒新規登録はこちら
            </p>
            <input
              type="text"
              className={styles.loginInput}
              placeholder="ユーザー名"
            />
            <input
              type="text"
              className={styles.loginInput}
              placeholder="メールアドレス"
            />
            <input
              type="text"
              className={styles.loginInput}
              placeholder="パスワード"
            />
            <input
              type="text"
              className={styles.loginInput}
              placeholder="確認用パスワード"
            />
            <button className={styles.loginButton}>
              サインアップ
            </button>
            <Link to="/login"  >
              <button className={styles.loginRegisterButton}>
                ログイン
              </button>
            </Link>
          </div>
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
        <Tabs>
          <TabList>
            <Tab>教師登録</Tab>
            <Tab>生徒登録</Tab>
          </TabList>
          <TabPanel>
            <TeacherRegister />
          </TabPanel>
          <TabPanel>
            <StudentRegister />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}
