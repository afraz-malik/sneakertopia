import React from 'react'
import ExploreMoreCss from './ExploreMore.module.scss'

// Dummy products Array
const products = [
  {
    id: 1,
    title: 'Air Max pegasus 37',
    img: 'images/air-max-90-flyease.png',
    price: '999',
    desp: 'The Aleali May x women’s Air Jordan 14 Retro Low SP "Fortune" reunites...',
  },
  {
    id: 2,
    title: 'Air Max pegasus 37',
    img: 'images/air-max-90-flyease.png',
    price: '999',
    desp: 'The Aleali May x women’s Air Jordan 14 Retro Low SP "Fortune" reunites...',
  },
  {
    id: 3,
    title: 'Air Max pegasus 37',
    img: 'images/air-max-90-flyease.png',
    price: '999',
    desp: 'The Aleali May x women’s Air Jordan 14 Retro Low SP "Fortune" reunites...',
  },
  {
    id: 4,
    title: 'Air Max pegasus 37',
    img: 'images/air-max-90-flyease.png',
    price: '999',
    desp: 'The Aleali May x women’s Air Jordan 14 Retro Low SP "Fortune" reunites...',
  },
]
const ExploreMore = () => {
  return (
    <div className={ExploreMoreCss.explore}>
      <h1>Explore OPTIONS</h1>
      <div className={ExploreMoreCss.cards}>
        {products
          .filter((product, idx) => idx < 3) // This will always render first three products
          .map((product) => (
            <div key={product.id}>
              <div className={ExploreMoreCss.card}>
                <h1>{product.title}</h1>
                <div className={ExploreMoreCss.img}>
                  <img alt="" src={product.img} />
                  <p>{product.desp}</p>
                </div>
              </div>
              <div className={ExploreMoreCss.addToCart_price}>
                <div className={ExploreMoreCss.addToCart}>
                  <img alt="" src="images/basket.svg" />
                </div>
                <div className={ExploreMoreCss.price}>
                  <h3>${product.price}</h3>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default ExploreMore
