import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import HomeHeaderCss from './HomeHeader.module.scss'

const HomeHeader = () => {
  return (
    <div
      className={HomeHeaderCss.header}
      style={{ backgroundImage: "url('images/image 2.png')" }}
    >
      <SearchBar />
    </div>
  )
}

export default HomeHeader
