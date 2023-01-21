import React from 'react'
import "./ProfileDesc.css"

//今はどちらの構成も見るためにstateを渡しているが最終的にはユーザの種別を渡して判断するようにする
//文字数に制限を設ける
// 一言の文字数は300字までにする
export default function ProfileDesc({state}) {
  
  // ユーザが教える側か教えられる側かでここは変わる
  const studentdesc = () => {
    return (
      <>
        <div className="type">
          お住まい（市まで）:<br className='hidden' />
        </div>
        <div className="type">
          お探しの授業形態:<br/>      
        </div>
        <div className="type">
          一言:<br/>
        </div>
      </>
    )
  }

  const teacherdesc = () => {
    return (
      <>
        <div className="type">
          お住まい（市まで）:<br className='hidden' />
        </div>
        <div className="type">
          対応できる教科:
        </div>
        <div className="type">
          授業形態:<br/>      
        </div>
      </>
    )
  }



  return (
    <div className="profiledesc">
      <div className="descWrapper">
        { state ? teacherdesc() : studentdesc() }
      </div>
    </div>
  )
}
