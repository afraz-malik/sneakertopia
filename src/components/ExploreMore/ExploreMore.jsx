import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import ExploreMoreCss from './ExploreMore.module.scss'

// Dummy products Array
import { products } from '../products'
console.log(products)
const ExploreMore = () => {
  return (
    <div className={ExploreMoreCss.explore}>
      <h1>Explore OPTIONS</h1>
      <div className={ExploreMoreCss.cards}>
        {products
          .filter((product, idx) => idx < 3) // This will always render first three products
          .map((product) => (
            <ProductCard key={product.id} product={product} detail={true} />
          ))}
      </div>
    </div>
  )
}

export default ExploreMore
