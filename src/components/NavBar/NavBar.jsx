import React from 'react'
import NavBarCss from './NavBar.module.scss'
const NavBar = () => {
  return (
    <div className={NavBarCss.container}>
      <div className={NavBarCss.left}>
        <img alt="" src="images/image 1.svg" />
      </div>
      <div className={NavBarCss.center}>
        <ul>
          <li>CATEGORIES</li>
          <li>ABOUT</li>
          <li>COMPARE</li>
        </ul>
      </div>
      <div className={NavBarCss.right}>
        <img alt="" src="images/shopping-bag-line 1.svg" />
      </div>
    </div>
  )
}

export default NavBar
