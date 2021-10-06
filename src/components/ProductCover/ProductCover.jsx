import React from 'react'
import Card from '../Card/Card'
import ProductCoverCss from './ProductCover.module.scss'
const ProductCover = () => {
  const [source, setsource] = React.useState('images/air-max-90-flyease.png')

  // Taking slider to slide upon click
  var y = document.getElementsByClassName('slide')
  const scrollLeft = () => {
    for (let i = 0; i < 2; i++) {
      y[i].scrollLeft -= 200
    }
  }
  const scrollRight = () => {
    for (let i = 0; i < 2; i++) {
      y[i].scrollLeft += 200
    }
  }

  return (
    <Card>
      <div className={ProductCoverCss.productCover}>
        <div className={ProductCoverCss.like}>
          <img alt="" src="images/Vector.png" />
        </div>
        <div className={ProductCoverCss.cover}>
          <img alt="" src={source} />
        </div>
        <div className={ProductCoverCss.slider}>
          <div className={ProductCoverCss.prev} onClick={() => scrollLeft()}>
            <h3>PREV</h3>
            <img alt="" src="images/Group 14.svg" />
          </div>
          <div className={ProductCoverCss.slides}>
            <ul className="slide">
              {[...Array(10)].map((arr, idx) => (
                <li key={idx}>
                  <img
                    alt=""
                    src={'images/air-max-90-flyease.png'}
                    onClick={(e) => setsource(e.target.src)}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className={ProductCoverCss.next} onClick={() => scrollRight()}>
            <h3>NEXT</h3>
            <img alt="" src="images/Group 2.svg" />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ProductCover
