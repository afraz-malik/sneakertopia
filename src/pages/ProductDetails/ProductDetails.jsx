import React from 'react'
import Card from '../../components/Card/Card'
import Comments from '../../components/Comments/Comments'
import ExploreMore from '../../components/ExploreMore/ExploreMore'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import ProductCover from '../../components/ProductCover/ProductCover'
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
            <div className={ProductDetailsCss.firstCover}>
              <ProductCover />
            </div>
            <Card title="Product designer">
              <p>
                The Aleali May x women’s Air Jordan 14 Retro Low SP ‘Fortune’
                reunites Jordan Brand with the LA-based model and stylist for a
                fifth collaboration. Inspired by May’s personal heritage and
                cultural experiences, the low-top is treated to a luxe makeover,
                highlighted by a tan suede upper with contrasting hits of black
                on the collar and tongue.
              </p>
            </Card>
            <Card title="About The Designer">
              <div className={ProductDetailsCss.aboutDesigner}>
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
            </Card>
            <Comments />
          </div>
          <div className={ProductDetailsCss.col37}>
            <div className={ProductDetailsCss.secondCover}>
              <ProductCover />
            </div>
            <Card title="Nike Air">
              <div className={ProductDetailsCss.details}>
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
                      {[...Array(7)].map((arr, idx) => (
                        <div className={ProductDetailsCss.span} key={idx}>
                          {idx + 1}
                        </div>
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
            </Card>
            <Card title="Buy From">
              <div className={ProductDetailsCss.buyFrom}>
                <div className={ProductDetailsCss.network}>
                  <div className={ProductDetailsCss.left}>
                    <img alt="" src="images/Ellipse 103.svg" />
                    <img alt="" src="images/image 4.png" />
                  </div>
                  <div className={ProductDetailsCss.right}>
                    <h4>$99.5</h4>
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
                    <h4>$99.5</h4>
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
                    <h4>$99.5</h4>
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
                    <h4>$99.5</h4>
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
