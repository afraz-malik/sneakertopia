import React from 'react'
import CompareCardCss from './CompareCard.module.scss'
const CompareCard = ({ productApi }) => {
  return (
    <div className={CompareCardCss.card}>
      <div className={CompareCardCss.img}>
        <img alt="" src={productApi.images[0]} />
      </div>
      <h1>{productApi.title}</h1>
      <h3>Description</h3>
      <p>{productApi.detail}</p>
      <div className={CompareCardCss.col37}>
        <div className={`${CompareCardCss.row}`}>
          <div className={CompareCardCss.details}>
            <div className={CompareCardCss.row}>
              <div className={CompareCardCss.col}>
                <h3>Price</h3>
                <p>${productApi.price}</p>
              </div>
              <div className={CompareCardCss.col}>
                <h3>SCORE</h3>
                <p>{productApi.score}</p>
              </div>
            </div>
            <div className={CompareCardCss.row}>
              <div className={CompareCardCss.col100}>
                <h3>Sizes</h3>
                <div className={CompareCardCss.boxes}>
                  {productApi.sizes.map((size, idx) => (
                    <div className={CompareCardCss.span} key={size}>
                      {size}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={CompareCardCss.row}>
              <div className={CompareCardCss.col100}>
                <h3>Color</h3>
                <div className={`${CompareCardCss.boxes}`}>
                  {productApi.colors.map((color, idx) => (
                    <div className={CompareCardCss.span} key={color}>
                      {color}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button> BUY</button>
    </div>
  )
}

export default CompareCard
