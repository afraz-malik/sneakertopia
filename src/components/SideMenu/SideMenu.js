import React, { useState } from 'react'
import SideMenuCss from './SideMenu.module.scss'
const SideMenu = ({ state, setstate }) => {
  const [toggle, settoggle] = useState({
    category: false,
    date: false,
    date_date: false,
  })
  const handleToggle = (val) => {
    if (val === 0) {
      settoggle({ ...toggle, category: !toggle.category })
    }
    if (val === 1) {
      settoggle({ ...toggle, date: !toggle.date })
    }
  }
  return (
    <div className={SideMenuCss.leftsection}>
      <div className={`${SideMenuCss.outside_leftsectioncard}`}>
        <div
          className={SideMenuCss.leftsectioncard}
          onClick={() => handleToggle(0)}
        >
          <p>Category</p>
          <img
            alt=""
            className={`${SideMenuCss.arrow} fuckingarrow`}
            src="images/Caret.png"
            style={{ transform: toggle.category ? 'rotate(0deg)' : null }}
          />
        </div>
        <div
          className={`${SideMenuCss.leftsectioncard} ${SideMenuCss.insidesecond} `}
          style={{ display: toggle.category ? 'flex' : 'none' }}
        >
          <div className={SideMenuCss.boxes}>
            <div
              className={SideMenuCss.span}
              onClick={() =>
                setstate({
                  ...state,
                  category: state.category === 'Men' ? null : 'Men',
                })
              }
              style={
                state.category === 'Men'
                  ? { backgroundColor: 'black', color: 'white' }
                  : null
              }
            >
              Men
            </div>
            <div
              className={SideMenuCss.span}
              onClick={() =>
                setstate({
                  ...state,
                  category: state.category === 'Women' ? null : 'Women',
                })
              }
              style={
                state.category === 'Women'
                  ? { backgroundColor: 'black', color: 'white' }
                  : null
              }
            >
              Women
            </div>
            <div
              className={SideMenuCss.span}
              onClick={() =>
                setstate({
                  ...state,
                  category: state.category === 'Youth' ? null : 'Youth',
                })
              }
              style={
                state.category === 'Youth'
                  ? { backgroundColor: 'black', color: 'white' }
                  : null
              }
            >
              Youth
            </div>
          </div>
        </div>
        <div
          className={SideMenuCss.leftsectioncard}
          onClick={() => handleToggle(1)}
        >
          <p>Release date</p>
          <img
            alt=""
            className={`${SideMenuCss.arrow} fuckingarrow`}
            src="images/Caret.png"
            style={{ transform: toggle.date ? 'rotate(0deg)' : null }}
          />
        </div>
        <div className={`${SideMenuCss.date} `}>
          {!state.date ? null : state.date.toString()}
        </div>
        <div
          className={`${SideMenuCss.leftsectioncard} ${SideMenuCss.insidesecond}`}
          style={{ display: toggle.date ? 'flex' : 'none' }}
        >
          <input
            type="date"
            id="date"
            name="date"
            onChange={(e) => setstate({ ...state, date: e.target.value })}
          />
        </div>
      </div>
    </div>
  )
}
export default SideMenu
