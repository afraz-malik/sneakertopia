import React, { useState } from 'react'
import SideMenuCss from './SideMenu.module.scss'
import Calendar from 'react-calendar'

const SideMenu = () => {
  const [value, onChange] = useState()

  const showResults = (index1) => {
    var inside = document.getElementsByClassName('inside')[index1]
    var rotate = document.getElementsByClassName('fuckingarrow')[index1]
    if (inside) {
      if (inside.style.display === 'flex') {
        inside.style.display = 'none'
        rotate.style.transform = 'rotate(-90deg)'
      } else {
        inside.style.display = 'flex'
        rotate.style.transform = 'rotate(0deg)'
      }
    } else {
      if (rotate.style.transform === 'rotate(0deg)') {
        rotate.style.transform = 'rotate(-90deg)'
      } else {
        rotate.style.transform = 'rotate(0deg)'
      }
    }
  }

  const handleChange = (e) => {
    onChange(e)
    showResults(1)
  }
  return (
    <div className={SideMenuCss.leftsection}>
      <div className={`${SideMenuCss.outside_leftsectioncard} mainSearch`}>
        <div
          className={SideMenuCss.leftsectioncard}
          onClick={() => showResults(0)}
        >
          <p>Category</p>
          <img
            alt=""
            className={`${SideMenuCss.arrow} fuckingarrow`}
            src="images/downarrow.png"
          />
        </div>
        <div
          className={`${SideMenuCss.leftsectioncard} ${SideMenuCss.insidesecond} inside `}
        >
          <div className={SideMenuCss.boxes}>
            <div className={SideMenuCss.span}>Men</div>
            <div className={SideMenuCss.span}>Women</div>
            <div className={SideMenuCss.span}>Youth</div>
          </div>
        </div>
        <div
          className={SideMenuCss.leftsectioncard}
          onClick={() => showResults(1)}
        >
          <p>Release date</p>
          <img
            alt=""
            className={`${SideMenuCss.arrow} fuckingarrow`}
            src="images\downarrow.png"
          />
        </div>
        <div
          className={`${SideMenuCss.leftsectioncard} ${SideMenuCss.insidesecond} inside`}
        >
          <Calendar onChange={handleChange} value={value} />
        </div>
      </div>
    </div>
  )
}
export const DashboardSideMenu = () => {
  return (
    <div className={SideMenuCss.leftsection}>
      <div
        className={`${SideMenuCss.leftsectioncard} ${SideMenuCss.first}`}
        style={{ display: 'flex' }}
      >
        <p>SHOW RESULTS BY:</p>
      </div>
      <div className={`${SideMenuCss.outside_leftsectioncard} mainSearch`}>
        <div className={SideMenuCss.leftsectioncard}>
          <p>ACTIVE (12)</p>
        </div>
        <div className={SideMenuCss.leftsectioncard}>
          <p>PENDING (0)</p>
        </div>
        <div className={SideMenuCss.leftsectioncard}>
          <p>REMOVED (0)</p>
        </div>
      </div>
    </div>
  )
}
export default SideMenu
