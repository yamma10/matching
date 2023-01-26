import React from 'react'
import "./ProfileDesc.css"

//今はどちらの構成も見るためにstateを渡しているが最終的にはユーザの種別を渡して判断するようにする
//文字数に制限を設ける
// 一言の文字数は300字までにする
export default function ProfileDesc({user}) {

  const checkCity = () => {
    switch(user.city) {
      case "saga": 
        return (
          <>
            <span>佐賀市</span>
          </>
        );
      case "karatsu":
        return (
          <>
            <span>唐津市</span>
          </>
        );
      case "tosu":
        return (
          <>
            <span>鳥栖市</span>
          </>
        );
      case "taku":
        return (
          <>
            <span>多久市</span>
          </>
        );
      case "imari":
        return (
          <>
            <span>伊万里市</span>
          </>
        );
      case "kashima":
        return (
          <>
            <span>鹿島市</span>
          </>
        );
      case "ogi":
        return (
          <>
            <span>小城市</span>
          </>
        );
      case "ureshino":
        return (
          <>
            <span>嬉野市</span>
          </>
        );
      case "kanzaki":
        return (
          <>
            <span>神崎市</span>
          </>
        );
    }
  }

  const checkMethod = () => {
    if (user.method) {
      return (
        <span>オンラインも可能</span>
      )
    } else {
      return (
        <span>対面</span>
      )
    }
  }

  const teacherdesc = () => {
    return (
      <>
        <div className="type">
          お住まい（市まで）:<br className='hidden' />
          {checkCity()}
        </div>
        <div className="type">
          対応できる教科:
        </div>
        <div className="type">
          授業形態:<br/>    
          <span>{checkMethod()}</span> 
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
