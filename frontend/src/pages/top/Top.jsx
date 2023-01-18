import React from 'react'
import Toptopbar from '../../components/toptopbar/Toptopbar'

import "./Top.css"


export default function Top() {
  return (
    <div className='topPage'>
      <div className="topPageWrapper">
        <Toptopbar />
        <div className="topPageBottom">
          <div className="topPageDesc">
            <div className="desc1">
              <u>誰かを教えたい</u>人や
            </div>
            <div className="desc2">
              <u>先生を探している</u>人に
            </div>
            
            {/* <h4 className="topPageDescMain">
              <span className="main01">
                誰かを教えたい方や
              </span>
              <br/>
              <div className="main02">
                先生を探している方のための
              </div>
              <br />
              <span className="main03">
                アプリケーション
              </span>
            </h4>
            <span className="topPageDescsub">
            生徒は募集に対してコンタクトをとることができます
          </span> */}
          </div>
          <img src="/assets/person/person01.jpg" alt="" className="topImg" />
        </div>
      </div>
    </div>
  )
};
