import React, { useEffect } from 'react'
import Card from '../../components/Card/Card'
import CommentsBox from '../../components/CommentsBox/CommentsBox'
import ExploreMore from '../../components/ExploreMore/ExploreMore'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import ProductCover from '../../components/ProductCover/ProductCover'
import SearchBar from '../../components/SearchBar/SearchBar'
import ProductDetailsCss from './ProductDetails.module.scss'
// Dummy product api
const productApi = {
  id: 1,
  title: 'Nike AIR',
  price: '99.5',
  model: 'Air Jordan',
  release_date: '2021-08-20',
  sku: 'DJ1034 200',
  upper_material: 'Tan',
  score: '4.3',
  sizes: [8, 9, 10, 11, 12, 13, 14, 15],
  colors: ['pink', 'red', 'green', 'black'],
  images: [
    'images/air-max-90-flyease.png',
    'images/air-max-90-flyease.png',
    'images/air-max-90-flyease.png',
    'images/air-max-90-flyease.png',
    'images/air-max-90-flyease.png',
    'images/air-max-90-flyease.png',
    'images/air-max-90-flyease.png',
    'images/air-max-90-flyease.png',
    'images/air-max-90-flyease.png',
    'images/air-max-90-flyease.png',
  ],
  detail:
    'The Aleali May x women’s Air Jordan 14 Retro Low SP ‘Fortune’ reunites Jordan Brand with the LA-based model and stylist for a fifth collaboration. Inspired by May’s personal heritage and cultural experiences, the low-top is treated to a luxe makeover, highlighted by a tan suede upper with contrasting hits of black on the collar and tongue.',
  designer: {
    name: 'Tinker Haterfield',
    image: 'images/Mask Group.svg',
    detail:
      'Hatfield was the lead designer of Air Jordans III through XV, XX, and XX3. Additionally, Hatfield co-designed Air Jordans 2010 and XXX. Phil Knight credits the Air Jordan III with saving Nike.',
  },
  comments: [
    {
      id: 1,
      name: 'Dorothy Parker',
      img: 'images/Mask Group.svg',
      date: 'Today at 12:05',
      comment:
        'This is probably one of the best shoes i’ve seen, i definetly recommend it to everyone!',
    },
    {
      id: 2,
      name: 'Dorothy Parker',
      img: 'images/Mask Group.svg',
      date: 'Today at 12:05',
      comment:
        'This is probably one of the best shoes i’ve seen, i definetly recommend it to everyone!',
    },
  ],
}

const ProductDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={ProductDetailsCss.container}>
      <NavBar />
      <div className={ProductDetailsCss.body}>
        <SearchBar />
        <div className={ProductDetailsCss.cards}>
          <div className={ProductDetailsCss.col60}>
            <div className={ProductDetailsCss.firstCover}>
              <ProductCover images={productApi.images} />
            </div>
            <Card title="Product designer">
              <p>{productApi.detail}</p>
            </Card>
            <Card title="About The Designer">
              <div className={ProductDetailsCss.aboutDesigner}>
                <div className={ProductDetailsCss.imgbox}>
                  <img alt="" src={productApi.designer.image} />
                  <h3>{productApi.designer.name}</h3>
                </div>
                <p>{productApi.designer.detail}</p>
              </div>
            </Card>
            <CommentsBox comments={productApi.comments} />
          </div>
          <div className={ProductDetailsCss.col37}>
            <div className={ProductDetailsCss.secondCover}>
              <ProductCover images={productApi.images} />
            </div>
            <Card title="Nike Air">
              <div className={ProductDetailsCss.details}>
                <div className={ProductDetailsCss.row}>
                  <div className={ProductDetailsCss.col}>
                    <h3>MODEL</h3>
                    <p>{productApi.model}</p>
                  </div>
                  <div className={ProductDetailsCss.col}>
                    <h3>Release date</h3>
                    <p>{productApi.release_date}</p>
                  </div>
                </div>
                <div className={ProductDetailsCss.row}>
                  <div className={ProductDetailsCss.col}>
                    <h3>SKU</h3>
                    <p>{productApi.sku}</p>
                  </div>
                  <div className={ProductDetailsCss.col}>
                    <h3>Upper material</h3>
                    <p>{productApi.upper_material}</p>
                  </div>
                </div>
                <div className={ProductDetailsCss.row}>
                  <div className={ProductDetailsCss.col100}>
                    <h3>Sizes</h3>
                    <div className={ProductDetailsCss.boxes}>
                      {productApi.sizes.map((size, idx) => (
                        <div className={ProductDetailsCss.span} key={size}>
                          {size}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={ProductDetailsCss.row}>
                  <div className={ProductDetailsCss.col100}>
                    <h3>Color</h3>
                    <div className={ProductDetailsCss.boxes}>
                      {productApi.colors.map((color, idx) => (
                        <div className={ProductDetailsCss.span} key={color}>
                          {color}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <Card title="Buy From">
              <div className={ProductDetailsCss.buyFrom}>
                <div className={ProductDetailsCss.network}>
                  <div className={ProductDetailsCss.left}>
                    <img alt="" src="images/Ellipse 103.svg" />
                    <img alt="" src="images/image 4.png" />
                  </div>
                  <div className={ProductDetailsCss.right}>
                    <h4>${productApi.price}</h4>
                    <div className={ProductDetailsCss.cart}>
                      <img alt="" src="images/sale 1.svg" />
                    </div>
                  </div>
                </div>
                <div
                  className={ProductDetailsCss.network}
                  style={{ opacity: '0.3' }}
                >
                  <div className={ProductDetailsCss.left}>
                    <img alt="" src="images/Ellipse 103 red.svg" />
                    <img alt="" src="images/image 5.png" />
                  </div>
                  <div className={ProductDetailsCss.right}>
                    <h4>${productApi.price}</h4>
                    <div className={ProductDetailsCss.cart}>
                      <img alt="" src="images/sale 1.svg" />
                    </div>
                  </div>
                </div>
                <div className={ProductDetailsCss.network}>
                  <div className={ProductDetailsCss.left}>
                    <img alt="" src="images/Ellipse 103.svg" />
                    <img alt="" src="images/image 6.png" />
                  </div>
                  <div className={ProductDetailsCss.right}>
                    <h4>${productApi.price}</h4>
                    <div className={ProductDetailsCss.cart}>
                      <img alt="" src="images/sale 1.svg" />
                    </div>
                  </div>
                </div>
                <div className={ProductDetailsCss.network}>
                  <div className={ProductDetailsCss.left}>
                    <img alt="" src="images/Ellipse 103.svg" />
                    <img alt="" src="images/image 7.png" />
                  </div>
                  <div className={ProductDetailsCss.right}>
                    <h4>${productApi.price}</h4>
                    <div className={ProductDetailsCss.cart}>
                      <img alt="" src="images/sale 1.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <div className={`${ProductDetailsCss.poster}`}>
              <img alt="" src="images/image 9ads.png" />
            </div>
          </div>
        </div>
        <ExploreMore />
      </div>
      <Footer />
    </div>
  )
}

export default ProductDetails
