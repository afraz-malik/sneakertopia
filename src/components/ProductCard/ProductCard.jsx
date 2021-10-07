import React from 'react'
import ProductCardCss from './ProductCard.module.scss'
const ProductCard = ({ product, detail }) => {
  return (
    <div className={ProductCardCss.container}>
      <div className={ProductCardCss.card}>
        <h1>{product.title}</h1>
        <div className={ProductCardCss.img}>
          <img alt="" src={product.img} />
          {detail ? <p>{product.desp}</p> : null}
        </div>
      </div>
      <div className={ProductCardCss.addToCart_price}>
        <div className={ProductCardCss.addToCart}>
          <img alt="" src="images/basket.svg" />
        </div>
        <div className={ProductCardCss.price}>
          <h3>${product.price}</h3>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
