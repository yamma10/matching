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
          </div>
          <img src="/assets/person/person01.jpg" alt="" className="topImg" />
        </div>
      </div>
    </div>
  )
};
