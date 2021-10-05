import React from 'react'
import NavBarCss from './NavBar.module.scss'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className={NavBarCss.container}>
      <div className={NavBarCss.left}>
        <Link to="/">
          <img alt="" src="images/image 1.svg" />
        </Link>
      </div>
      <div className={NavBarCss.center}>
        <i class="fa fa-bars"></i>
        <ul>
          <li>
            <Link to="/details">CATEGORIES</Link>
          </li>
          <li>
            <Link to="/">ABOUT</Link>
          </li>
          <li>
            <Link to="/compare">COMPARE</Link>
          </li>
        </ul>
      </div>
      <div className={NavBarCss.right}>
        <img alt="" src="images/shopping-bag-line 1.svg" />
        <div
          className={NavBarCss.counter}
          style={{ backgroundImage: 'url("images/Ellipse 3.png")' }}
        >
          <span>2</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar
