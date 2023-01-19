import React from 'react'
import "./Settings.css"

//やり残し
//requiredつける
//ユーザー情報持ってくる

export default function Settings({state}) {

  const SettingTeacher = () => {
    return (
      <div className="settings">
        <div className="settingsWrapper">
          <h1 className="settingTop">
            設定
          </h1>
          <div className="settingBottom">
            <div className="settingItems">
              <div className='settingItem' >
                <p>名前</p>
                <input
                  type="text"
                  className="settingInput"
                />
              </div>   
              <div className='settingItem' >
                <p>メールアドレス</p>
                <input
                  type="text"
                  className="settingInput"
                />
              </div>
              <div className='settingItem' >
                <p>パスワード変更</p>
                <input
                  type="text"
                  className="settingInput"  
                />
              </div>
              <div className='settingItem' >
                <p>確認用変更パスワード</p>
                <input
                  type="text"
                  className="settingInput"
                  placeholder="確認用パスワード"
                />
              </div>
              <div className='settingItem' >
                <p>住まい（市まで）</p>
                <input
                  type="text"
                  className="settingInput"
                />
              </div>
              <div className='settingItem' >
                <p>対応可能な教科</p>
                <input
                  type="text"
                  className="settingInput"
                />
              </div>
              <div className='settingItem' >
                <p>授業形態</p>
                <input
                  type="text"
                  className="settingInput"
                />
              </div>
              {/* 改行できない */}
              {/* <div className='settingItem' >
                <p>一言</p>
                <input
                  type="text"
                  className="settingInputMessage"
                  maxLength={400}
                  wrap="soft"
                />
              </div> */}
              <button className="loginButton">
                変更する
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const SettingStudent = () => {
    return (
      <div className="settings">
        <div className="settingsWrapper">
          <h1 className="settingTop">
            設定
          </h1>
          <div className="settingBottom">
            <div className="settingItems">
              <div className='settingItem' >
                <p>名前</p>
                <input
                  type="text"
                  className="settingInput"
                />
              </div>   
              <div className='settingItem' >
                <p>メールアドレス</p>
                <input
                  type="text"
                  className="settingInput"
                />
              </div>
              <div className='settingItem' >
                <p>パスワード変更</p>
                <input
                  type="text"
                  className="settingInput"  
                />
              </div>
              <div className='settingItem' >
                <p>確認用変更パスワード</p>
                <input
                  type="text"
                  className="settingInput"
                  placeholder="確認用パスワード"
                />
              </div>
              <div className='settingItem' >
                <p>住まい（市まで）</p>
                <input
                  type="text"
                  className="settingInput"
                />
              </div>
              <div className='settingItem' >
                <p>教えてほしい教科</p>
                <input
                  type="text"
                  className="settingInput"
                />
              </div>
              <div className='settingItem' >
                <p>お探しの授業形態</p>
                <input
                  type="text"
                  className="settingInput"
                />
              </div>
              {/* 改行できない */}
              {/* <div className='settingItem' >
                <p>一言</p>
                <input
                  type="text"
                  className="settingInputMessage"
                  maxLength={400}
                  wrap="soft"
                />
              </div> */}
              <button className="loginButton">
                変更する
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {state ? SettingTeacher() : SettingStudent()}
    </>
  )
}
