import React from 'react'
import styles from "./Register.module.css"

export default function Register() {
  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <div className={styles.loginTop}>
          <h3 className={styles.loginLogo}>タイトル</h3>
        </div>
        <div className={styles.loginBottom}>
          <div className={styles.loginBox}>
            <p className={styles.loginMsg}>
              新規登録はこちら
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
            <button className={styles.loginRegisterButton}>
              ログイン
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
