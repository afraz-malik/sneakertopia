import React, { useState } from 'react'
import CompareCard from '../../components/CompareCard/CompareCard'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import SearchBar from '../../components/SearchBar/SearchBar'
import ComparePageCss from './ComparePage.module.scss'

// Dummy product api
const productApi = {
  id: 1,
  title: 'Air Max pegasus 37',
  price: '99.5',
  model: 'Air Jordan',
  release_date: '2021-08-20',
  sku: 'DJ1034 200',
  upper_material: 'Tan',
  score: '4.3',
  sizes: [8, 9, 10, 11, 12, 13],
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
    'Stay on top of the ever-changing sneaker and streetwear markets using our super-powered search engine and comparison tool.',
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

const ComparePage = () => {
  const [state, setstate] = useState(
    document.documentElement.clientWidth > 600 ? true : false
  )

  React.useEffect(() => {
    window.scrollTo(0, 0)
    window.addEventListener('resize', resizeEvent)
    return () => {
      window.removeEventListener('resize', resizeEvent)
    }
  }, [])

  // Reduce Compare Boxes to TWO products on mobile view for REsponsiveness
  const resizeEvent = () => {
    const cwidth = document.documentElement.clientWidth
    if (cwidth > 600) {
      setstate(true)
    } else if (cwidth <= 600) {
      setstate(false)
    }
  }
  return (
    <div className={ComparePageCss.container}>
      <NavBar />
      <div className={ComparePageCss.body}>
        <SearchBar />
        <div className={ComparePageCss.cards}>
          <CompareCard productApi={productApi} />
          <CompareCard productApi={productApi} />
          {state ? <CompareCard productApi={productApi} /> : null}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ComparePage
