import React from 'react'
import SearchPageCss from './SearchPage.module.scss'
import NavBar from '../../components/NavBar/NavBar'
import SearchBar from '../../components/SearchBar/SearchBar'
import ProductCard from '../../components/ProductCard/ProductCard'
import { products } from '../../components/products'
import SideMenu from '../../components/SideMenu/SideMenu'
const SearchPage = () => {
  const [state, setstate] = React.useState({
    search: '',
    caterogy: 'All Categories',
  })
  const [toggle, settoggle] = React.useState({ sortby: false, filter: false })

  return (
    <div className={SearchPageCss.container}>
      <NavBar />
      <div className={SearchPageCss.body}>
        <SearchBar />
        <div className={SearchPageCss.super}>
          <h1>Nike</h1>
        </div>
        <div className={SearchPageCss.nav}>
          <ul>
            <li
              onClick={() => settoggle({ ...toggle, filter: !toggle.filter })}
            >
              Show Filters
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
                  <h3>{state.caterogy}</h3>
                  <img alt="" src="images/Caret.png" />
                </div>
                <div
                  className={SearchPageCss.dd_content}
                  style={
                    toggle.sortby ? { display: 'block' } : { display: 'none' }
                  }
                >
                  <ul>
                    <li>Popular</li>
                    <li>New</li>
                    <li>Availablity</li>
                    <li>Price (low-high)</li>
                    <li>Price (high-low)</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className={SearchPageCss.filter_cards}>
          {toggle.filter ? <SideMenu /> : null}
          <div
            className={SearchPageCss.cards}
            style={{
              gridTemplateColumns: toggle.filter
                ? 'auto auto auto '
                : 'auto auto auto auto',
              width: toggle.filter ? '80%' : null,
            }}
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchPage
