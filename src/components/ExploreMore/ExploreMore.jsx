import React from 'react'
import ExploreMoreCss from './ExploreMore.module.scss'
const ExploreMore = () => {
  return (
    <div className={ExploreMoreCss.explore}>
      <h1>Explore OPTIONS</h1>
      <div className={ExploreMoreCss.cards}>
        {[...Array(3)].map((arr) => (
          <div>
            <div className={ExploreMoreCss.card}>
              <h1>Air Max pegasus 37</h1>
              <div className={ExploreMoreCss.img}>
                <img alt="" src="images/air-max-90-flyease.png" />
                <p>
                  The Aleali May x women’s Air Jordan 14 Retro Low SP ‘Fortune’
                  reunites...
                </p>
              </div>
            </div>
            <div className={ExploreMoreCss.addToCart_price}>
              <div className={ExploreMoreCss.addToCart}>
                <img alt="" src="images/Basket.svg" />
              </div>
              <div className={ExploreMoreCss.price}>
                <h3>$999</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExploreMore
