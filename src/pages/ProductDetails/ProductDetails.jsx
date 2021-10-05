import React from 'react'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import SearchBar from '../../components/SearchBar/SearchBar'
import ProductDetailsCss from './ProductDetails.module.scss'
const ProductDetails = () => {
  return (
    <div className={ProductDetailsCss.container}>
      <NavBar />
      <div className={ProductDetailsCss.body}>
        <SearchBar />
        <div className={ProductDetailsCss.cards}>
          <div className={ProductDetailsCss.col60}>
            <div
              className={`${ProductDetailsCss.card} ${ProductDetailsCss.row}`}
            >
              <div className={ProductDetailsCss.productCover}>
                <div className={ProductDetailsCss.like}>
                  <img alt="" src="images/vector.png" />
                </div>
                <div className={ProductDetailsCss.cover}>
                  <img alt="" src="images/air-max-90-flyease.png" />
                </div>
                <div className={ProductDetailsCss.slider}>
                  <div className={ProductDetailsCss.prev}>
                    <h3>PREV</h3>
                    <img alt="" src="images/Group 14.svg" />
                  </div>
                  <div className={ProductDetailsCss.slides}>
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
                  <div className={ProductDetailsCss.next}>
                    <h3>NEXT</h3>
                    <img alt="" src="images/Group 2.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${ProductDetailsCss.card} ${ProductDetailsCss.row}`}
            >
              <div className={ProductDetailsCss.productDesigner}>
                <h1>Product designer</h1>
                <p>
                  The Aleali May x women’s Air Jordan 14 Retro Low SP ‘Fortune’
                  reunites Jordan Brand with the LA-based model and stylist for
                  a fifth collaboration. Inspired by May’s personal heritage and
                  cultural experiences, the low-top is treated to a luxe
                  makeover, highlighted by a tan suede upper with contrasting
                  hits of black on the collar and tongue.
                </p>
              </div>
            </div>
            <div
              className={`${ProductDetailsCss.card} ${ProductDetailsCss.row}`}
            >
              <div className={ProductDetailsCss.aboutDesigner}>
                <h1>About The Designer</h1>
                <div className={ProductDetailsCss.imgbox}>
                  <img alt="" src="images/Mask Group.svg" />
                  <h3>Tinker Haterfield</h3>
                </div>
                <p>
                  Hatfield was the lead designer of Air Jordans III through XV,
                  XX, and XX3. Additionally, Hatfield co-designed Air Jordans
                  2010 and XXX. Phil Knight credits the Air Jordan III with
                  saving Nike.
                </p>
              </div>
            </div>
            <div
              className={`${ProductDetailsCss.card} ${ProductDetailsCss.row}`}
            >
              <div className={ProductDetailsCss.comments}>
                <h1>Comments</h1>

                <textarea placeholder="Add coments here" rows="10" cols="50" />
                {[...Array(2)].map((arr) => (
                  <div className={ProductDetailsCss.imgbox}>
                    <img alt="" src="images/Mask Group.svg" />
                    <div className={ProductDetailsCss.text}>
                      <h5>
                        {' '}
                        This is probably one of the best shoes i’ve seen, i
                        definetly recommend it to everyone!
                      </h5>
                      <p>
                        Today at 12:05 PM by &ensp;<span>Dorothy Parker</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={ProductDetailsCss.col37}>
            <div
              className={`${ProductDetailsCss.card} ${ProductDetailsCss.row}`}
            >
              <div className={ProductDetailsCss.details}>
                <h1>Nike AIR</h1>
                <div className={ProductDetailsCss.row}>
                  <div className={ProductDetailsCss.col}>
                    <h3>MODEL</h3>
                    <p> Air Jordan</p>
                  </div>
                  <div className={ProductDetailsCss.col}>
                    <h3>Release date</h3>
                    <p>2021-08-20</p>
                  </div>
                </div>
                <div className={ProductDetailsCss.row}>
                  <div className={ProductDetailsCss.col}>
                    <h3>SKU</h3>
                    <p> DJ1034 200</p>
                  </div>
                  <div className={ProductDetailsCss.col}>
                    <h3>Upper material</h3>
                    <p>Tan</p>
                  </div>
                </div>
                <div className={ProductDetailsCss.row}>
                  <div className={ProductDetailsCss.col100}>
                    <h3>Sizes</h3>
                    <div className={ProductDetailsCss.boxes}>
                      {[...Array(7)].map((arr, j) => (
                        <div className={ProductDetailsCss.span}>{j + 1}</div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={ProductDetailsCss.row}>
                  <div className={ProductDetailsCss.col100}>
                    <h3>Color</h3>
                    <div className={ProductDetailsCss.boxes}>
                      <div className={ProductDetailsCss.span}>PINK</div>
                      <div className={ProductDetailsCss.span}>RED</div>
                      <div className={ProductDetailsCss.span}>GREEN</div>
                      <div className={ProductDetailsCss.span}>BLACK</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`${ProductDetailsCss.card} ${ProductDetailsCss.row}`}
            >
              <div className={ProductDetailsCss.buyFrom}>
                <h1>Buy From</h1>
                <div className={ProductDetailsCss.network}>
                  <div className={ProductDetailsCss.left}>
                    <img alt="" src="images/Ellipse 103.svg" />
                    <img alt="" src="images/image 4.png" />
                  </div>
                  <div className={ProductDetailsCss.right}>
                    <span>$99.5</span>
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
                    <span>$99.5</span>
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
                    <span>$99.5</span>
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
                    <span>$99.5</span>
                    <div className={ProductDetailsCss.cart}>
                      <img alt="" src="images/sale 1.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${ProductDetailsCss.poster} ${ProductDetailsCss.row}`}
            >
              <img alt="" src="images/image 9ads.png" />
            </div>
          </div>
        </div>
        <div className={ProductDetailsCss.explore}>
          <h1>Explore OPTIONS</h1>
          <div className={ProductDetailsCss.cards}>
            {[...Array(3)].map((arr) => (
              <div>
                <div className={ProductDetailsCss.card}>
                  <h2>Air Max pegasus 37</h2>
                  <div className={ProductDetailsCss.img}>
                    <img alt="" src="images/air-max-90-flyease.png" />
                    <p>
                      The Aleali May x women’s Air Jordan 14 Retro Low SP
                      ‘Fortune’ reunites...
                    </p>
                  </div>
                </div>
                <div className={ProductDetailsCss.addToCart_price}>
                  <div className={ProductDetailsCss.addToCart}>
                    <img alt="" src="images/Basket.svg" />
                  </div>
                  <div className={ProductDetailsCss.price}>
                    <h3>$999</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductDetails
