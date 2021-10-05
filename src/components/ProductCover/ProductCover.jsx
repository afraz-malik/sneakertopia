import React from 'react'
import Card from '../Card/Card'
import ProductCoverCss from './ProductCover.module.scss'
const ProductCover = () => {
  return (
    <Card>
      <div className={ProductCoverCss.productCover}>
        <div className={ProductCoverCss.like}>
          <img alt="" src="images/vector.png" />
        </div>
        <div className={ProductCoverCss.cover}>
          <img alt="" src="images/air-max-90-flyease.png" />
        </div>
        <div className={ProductCoverCss.slider}>
          <div className={ProductCoverCss.prev}>
            <h3>PREV</h3>
            <img alt="" src="images/Group 14.svg" />
          </div>
          <div className={ProductCoverCss.slides}>
            <ul>
              <li>
                <img alt="" src="images/air-max-90-flyease2.png" />
              </li>
              <li>
                <img alt="" src="images/air-max-90-flyease2.png" />
              </li>
              <li>
                <img alt="" src="images/air-max-90-flyease2.png" />
              </li>
              <li>
                <img alt="" src="images/air-max-90-flyease2.png" />
              </li>
              <li>
                <img alt="" src="images/air-max-90-flyease2.png" />
              </li>
            </ul>
          </div>
          <div className={ProductCoverCss.next}>
            <h3>NEXT</h3>
            <img alt="" src="images/Group 2.svg" />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ProductCover
