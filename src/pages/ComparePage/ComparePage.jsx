import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import SearchBar from '../../components/SearchBar/SearchBar'
import ComparePageCss from './ComparePage.module.scss'
const ComparePage = () => {
  const [state, setstate] = useState(
    document.documentElement.clientWidth > 600 ? 3 : 2
  )
  React.useEffect(() => {
    window.addEventListener('resize', resizeEvent)
    return () => {
      window.removeEventListener('resize', resizeEvent)
    }
    // eslint-disable-next-line
  }, [])
  const resizeEvent = () => {
    const cwidth = document.documentElement.clientWidth
    if (cwidth > 600) {
      setstate(3)
    } else if (cwidth <= 600) {
      setstate(2)
    }
  }
  return (
    <div className={ComparePageCss.container}>
      <NavBar />
      <div className={ComparePageCss.body}>
        <SearchBar />
        <div className={ComparePageCss.cards}>
          {[...Array(state)].map((arr) => (
            <div className={ComparePageCss.card}>
              <div className={ComparePageCss.img}>
                <img alt="" src="images/air-max-90-flyease.png" />
              </div>
              <h1>Air Max pegasus 37</h1>
              <h3>Description</h3>
              <p>
                Stay on top of the ever-changing sneaker and streetwear markets
                using our super-powered search engine and comparison tool.
              </p>
              <div className={ComparePageCss.col37}>
                <div className={`${ComparePageCss.row}`}>
                  <div className={ComparePageCss.details}>
                    <div className={ComparePageCss.row}>
                      <div className={ComparePageCss.col}>
                        <h3>Price</h3>
                        <p> DJ1034 200</p>
                      </div>
                      <div className={ComparePageCss.col}>
                        <h3>SCORE</h3>
                        <p>4.3</p>
                      </div>
                    </div>
                    <div className={ComparePageCss.row}>
                      <div className={ComparePageCss.col100}>
                        <h3>Sizes</h3>
                        <div className={ComparePageCss.boxes}>
                          {[...Array(6)].map((arr, j) => (
                            <div className={ComparePageCss.span}>{j + 1}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className={ComparePageCss.row}>
                      <div className={ComparePageCss.col100}>
                        <h3>Color</h3>
                        <div
                          className={`${ComparePageCss.boxes} ${ComparePageCss.boxes2}`}
                        >
                          <div className={ComparePageCss.span}>PINK</div>
                          <div className={ComparePageCss.span}>RED</div>
                          <div className={ComparePageCss.span}>GREEN</div>
                          <div className={ComparePageCss.span}>BLACK</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button> BUY</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ComparePage
