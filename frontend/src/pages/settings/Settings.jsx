import { convertLength } from '@mui/material/styles/cssUtils';
import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../state/AuthContext';
import "./Settings.css"




export default function Settings() {
  const { user } = useContext(AuthContext)

  const navigation = useNavigate();


  const [method, setMethod] = useState(user.method);
  const [username, setuserName] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [city, setCity] = useState(user.city);

  const [subject, setSubject] = useState(user.subject);

  // プロフィール画像
  const [file, setFile] = useState(user.profilePicture);

  // console.log(city);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(file) {
      //キーとバリューを合わせてデータとして持っておく
      const data = new FormData();
      //同じ画像がアップロードされることも考えられるので現在時刻を付与する
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      setFile(fileName);

      try {
        //画像アップロード
        await axios.post("/upload", data);
        // setFile(fileName);
      } catch(err) {
        console.log(err);
      }
    }

    try {
      const newUser = {
        _id: user._id,
        profilePicture: file,
        username: username,
        email: email,
        password: password,
        city: city,
        subject: subject,
        method: method,
        type: user.type
      }
      // console.log(newUser);
      if(user.type) {
        await axios.put(`users/teacher/${newUser._id}`, newUser);
        
        localStorage.setItem("user", JSON.stringify(newUser));
      } else {
        await axios.put(`users/student/${user._id}`, newUser);
        // studentUpdate(newUser,dispatch);
        localStorage.setItem("user", JSON.stringify(newUser));
      }
      
      navigation("/home");
    } catch (err) {
      console.log(err);
    }
    
  }



  

  const SettingTeacher = () => {
    return (
      <div className="settings">
        <div className="settingsWrapper">
          <h1 className="settingTop">
            設定
          </h1>
          <form className="settingBottom" onSubmit={(e) => handleSubmit(e)}>
            <div className="settingItems">
              <div className='settingItem' >
                <p>名前</p>
                <input
                  type="text"
                  className="settingInput"
                  required
                  onChange={(e) => setuserName(e.target.value)}
                  value={username}
                />
              </div>   
              <div className='settingItem' >
                <p>メールアドレス</p>
                <input
                  type="email"
                  className="settingInput"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className='settingItem' >
                <p>パスワード</p>
                <input
                  type="password"
                  className="settingInput" 
                  required
                  minLength="6"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div className='settingItem' >
                <p>住まい（市まで）</p>
                <select 
                className='settingInput'
                value={city}
                onChange={(e) => setCity(e.target.value)}
                >
                  <option value={"saga"}>
                    佐賀市
                  </option>
                  <option value={"karatsu"}>
                    唐津市
                  </option>
                  <option value={"tosu"}>
                    鳥栖市
                  </option>
                  <option value={"taku"}>
                    多久市
                  </option>
                  <option value={"imari"}>
                    伊万里市
                  </option>
                  <option value={"takeo"}>
                    武雄市
                  </option>
                  <option value={"kashima"}>
                    鹿島市
                  </option>
                  <option value={"ogi"}>
                    小城市
                  </option>
                  <option value={"ureshino"}>
                    嬉野市
                  </option>
                  <option value={"kanzaki"}>
                    神崎市
                  </option>
                </select>
              </div>
              <div className='settingItem' >
                <p>対応可能な教科</p>
                <input
                  type="text"
                  className="settingInput"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                />
              </div>
              {/* <div className="settingItem">
                <p>プロフィール画像を設定する</p>
                <input
                  type="file" 
                  id ="file" 
                  accept=".png, .jpeg, .jpg"
                  
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div> */}
              <div className='settingItem' >
                <p>授業形態</p>
                <select
                 className='settingInput'
                 value={method}
                 onChange={(e) => setMethod(e.target.value)}>
                  <option value={false}>
                     対面
                  </option>
                  <option value={true}>
                    オンラインも可能
                  </option>     
                </select>
              </div>
              <button className="loginButton">
                変更する
              </button>
            </div>
          </form>
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
            <form className="settingBottom" onSubmit={(e) => handleSubmit(e)}>
            <div className="settingItems">
              <div className='settingItem' >
                <p>名前</p>
                <input
                  type="text"
                  className="settingInput"
                  onChange={(e) => setuserName(e.target.value)}
                  value={username}
                />
              </div>   
              <div className='settingItem' >
                <p>メールアドレス</p>
                <input
                  type="email"
                  className="settingInput"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className='settingItem' >
                <p>パスワード</p>
                <input
                  type="password"
                  className="settingInput" 
                  required
                  minLength="6"  
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div className='settingItem' >
                <p>住まい（市まで）</p>
                <select 
                className='settingInput'
                value={city}
                onChange={(e) => setCity(e.target.value)}
                >
                  <option value={"saga"}>
                    佐賀市
                  </option>
                  <option value={"karatsu"}>
                    唐津市
                  </option>
                  <option value={"tosu"}>
                    鳥栖市
                  </option>
                  <option value={"taku"}>
                    多久市
                  </option>
                  <option value={"imari"}>
                    伊万里市
                  </option>
                  <option value={"takeo"}>
                    武雄市
                  </option>
                  <option value={"kashima"}>
                    鹿島市
                  </option>
                  <option value={"ogi"}>
                    小城市
                  </option>
                  <option value={"ureshino"}>
                    嬉野市
                  </option>
                  <option value={"kanzaki"}>
                    神崎市
                  </option>
                </select>
              </div>
              <div className='settingItem' >
                <p>お探しの授業形態</p>
                <select value={method}
                 onChange={(e) => setMethod(e.target.value)}className='settingInput'
                >
                  <option value={false}>
                     対面
                  </option>
                  <option value={true}>
                    オンラインも可能
                  </option>
                </select>
              </div>
              <button className="loginButton">
                変更する
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  return (
    <>
      {user.type ? SettingTeacher() : SettingStudent()}
    </>
  )
}
