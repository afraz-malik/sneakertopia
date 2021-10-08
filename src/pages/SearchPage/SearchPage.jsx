import React, { useEffect } from 'react'
import SearchPageCss from './SearchPage.module.scss'
import NavBar from '../../components/NavBar/NavBar'
import SearchBar from '../../components/SearchBar/SearchBar'
import ProductCard from '../../components/ProductCard/ProductCard'
import { products } from '../../components/products'
import SideMenu from '../../components/SideMenu/SideMenu'
import { withRouter } from 'react-router'
import Footer from '../../components/Footer/Footer'
const SearchPage = ({ location }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
    setstate({
      ...state,
      search: location.search ? decodeURI(location.search.substr(1)) : 'Latest',
    })
    // eslint-disable-next-line
  }, [location.search])
  const initialState = {
    search: location.search ? decodeURI(location.search.substr(1)) : 'Latest',
    sortby: 'All Categories',
    date: null,
    category: null,
  }
  const [state, setstate] = React.useState(initialState)
  const [toggle, settoggle] = React.useState({
    sortby: false,
    filter: false,
  })
  return (
    <div className={SearchPageCss.container}>
      <NavBar />
      <div className={SearchPageCss.body}>
        <SearchBar />
        <div className={SearchPageCss.super}>
          <h1>{state.search}</h1>
        </div>
        <div className={SearchPageCss.nav}>
          <ul>
            <li
              onClick={() => settoggle({ ...toggle, filter: !toggle.filter })}
            >
              {toggle.filter ? 'Hide Filters' : 'Show Filters'}
              <img
                alt=""
                className={`${SearchPageCss.arrow} fuckingarrow`}
                src="images/Caret.png"
                style={{ transform: toggle.filter ? 'rotate(0deg)' : null }}
              />
              &emsp; &emsp; &emsp;{' '}
              <span
                style={{
                  textDecoration: 'underline',
                  color: 'black',
                  display: toggle.filter ? 'inline-block' : 'none',
                }}
                onClick={() => setstate(initialState)}
              >
                Reset
              </span>
            </li>
            <li>Showing 100000+ Results</li>
            <li>
              <div className={SearchPageCss.box}>
                <div
                  className={SearchPageCss.dropdown}
                  onClick={() =>
                    settoggle({ ...toggle, sortby: !toggle.sortby })
                  }
                >
                  <span>Sort by</span>
                  <h3>{state.sortby}</h3>
                  <img alt="" src="images/Caret.png" />
                </div>
                <div
                  className={SearchPageCss.dd_content}
                  style={
                    toggle.sortby ? { display: 'block' } : { display: 'none' }
                  }
                >
                  <ul>
                    <li
                      onClick={() => {
                        setstate({ ...state, sortby: 'Popular' })
                        settoggle({ ...toggle, sortby: false })
                      }}
                    >
                      Popular
                    </li>
                    <li
                      onClick={() => {
                        setstate({ ...state, sortby: 'New' })
                        settoggle({ ...toggle, sortby: false })
                      }}
                    >
                      New
                    </li>
                    <li
                      onClick={() => {
                        setstate({ ...state, sortby: 'Avaiablity' })
                        settoggle({ ...toggle, sortby: false })
                      }}
                    >
                      Availablity
                    </li>
                    <li
                      onClick={() => {
                        setstate({ ...state, sortby: 'Price (low-high)' })
                        settoggle({ ...toggle, sortby: false })
                      }}
                    >
                      Price (low-high)
                    </li>
                    <li
                      onClick={() => {
                        setstate({ ...state, sortby: 'Price (high-low)' })
                        settoggle({ ...toggle, sortby: false })
                      }}
                    >
                      Price (high-low)
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className={SearchPageCss.filter_cards}>
          {toggle.filter ? (
            <div className={SearchPageCss.sideMenu}>
              <SideMenu setstate={setstate} state={state} />
            </div>
          ) : null}
          <div
            className={`${SearchPageCss.cards} ${
              toggle.filter ? SearchPageCss.cardsWithFilter : null
            }`}
          >
            {products.map((product, idx) => (
              <ProductCard key={idx} product={product} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default withRouter(SearchPage)
