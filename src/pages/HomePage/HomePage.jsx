import React from 'react'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import SearchBar from '../../components/SearchBar/SearchBar'
import HomePageCss from './HomePage.module.scss'
const HomePage = () => {
  return (
    <>
      <NavBar />
      <div
        className={HomePageCss.header}
        style={{ backgroundImage: "url('images/image 2.png')" }}
      >
        <SearchBar />
      </div>
      <Footer />
    </>
  )
}

export default HomePage
