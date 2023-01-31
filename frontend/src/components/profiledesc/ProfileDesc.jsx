import React from 'react'
import "./ProfileDesc.css"

//今はどちらの構成も見るためにstateを渡しているが最終的にはユーザの種別を渡して判断するようにする
//文字数に制限を設ける
// 一言の文字数は300字までにする
export default function ProfileDesc({user}) {
  console.log(user)
  function checkcity(user) {
    switch(user.city) {
      case "saga": 
        return "佐賀市"
      case "karatsu":
        return "唐津市"
      case "tosu":
        return "鳥栖市"
      case "taku":
        return "多久市"
      case "imari":
        return "伊万里市"
      case "kashima":
        return "鹿島市"
      case "ogi":
        return "小城市"
      case "ureshino":
        return "嬉野市"
      case "kanzaki":
        return "神崎市"
    }
  }
  const city = checkcity(user)
  console.log(city);

  function checkMethod (user) {
    if (user.method) {
      return "オンラインも可能"
    } else {
      return "対面授業"
    }
  }
  const method = checkMethod(user);

  const teacherdesc = () => {
    return (
      <>
        <div className="type">
          お住まい（市まで）:<br className='hidden' />
          {city}
        </div>
        <div className="type">
          対応できる教科: {user.subject}
        </div>
        <div className="type">
          授業形態:<br/>    
          <span>{method}</span> 
        </div>
      </>
    )
  }



  return (
    <div className="profiledesc">
      <div className="descWrapper">
        {teacherdesc()}
      </div>
    </div>
  )
}
