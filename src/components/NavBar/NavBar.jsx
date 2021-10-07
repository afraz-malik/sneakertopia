import React from 'react'
import NavBarCss from './NavBar.module.scss'
import { Link, withRouter } from 'react-router-dom'

const NavBar = () => {
  // USE EFFECT to handle Navbar
  React.useEffect(() => {
    if (document.documentElement.clientWidth < 500) {
      setstate(false)
      window.addEventListener('mouseup', clickEvent)
    }
    window.addEventListener('resize', resizeEvent)
    return () => {
      window.removeEventListener('mouseup', clickEvent)
      window.removeEventListener('resize', resizeEvent)
    }
    // eslint-disable-next-line
  }, [])
  const [state, setstate] = React.useState(
    document.documentElement.clientWidth < 500 ? false : true
  )
  // This will move navbar to bars in mobile view <i>
  const resizeEvent = () => {
    const scrolled = document.documentElement.clientWidth
    if (scrolled > 500) {
      window.removeEventListener('mouseup', clickEvent)
      setstate(true)
    } else if (scrolled <= 500) {
      window.addEventListener('mouseup', clickEvent)
      setstate(false)
    }
  }
  console.log(state)
  // this will hide menu in mobile view
  const clickEvent = (e) => {
    var container = document.getElementById('ul')
    if (!container.contains(e.target)) {
      if (document.documentElement.clientWidth < 500) {
        setstate(false)
      }
    }
  }

  return (
    <div className={NavBarCss.container}>
      <div className={NavBarCss.left}>
        <Link to="/">
          <img alt="" src="images/image 1.svg" />
        </Link>
      </div>
      <div className={NavBarCss.center} id="ul">
        <i
          className="fa fa-bars"
          onClick={() => setstate(!state)}
          style={{
            transform: state ? 'rotate(-90deg)' : 'unset',
            display: !state ? 'flex' : null,
          }}
        ></i>
        <ul style={{ display: state ? 'flex' : 'none' }}>
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

export default withRouter(NavBar)
