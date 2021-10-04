import React from 'react'
import SearchBarCss from './SearchBar.module.scss'
const countryList = [
  'Running',
  'Walking',
  'Sport',
  'American   ',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua and Barbuda',
  'Argentina',
  'Zimbabwe',
  'Åland Islands',
]

const SearchBar = () => {
  const [state, setstate] = React.useState('All categories')
  const [toggle, settoggle] = React.useState(false)
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  // }

  return (
    <div className={SearchBarCss.container}>
      <div className={SearchBarCss.input}>
        <input type="text" placeholder="Search sneaker name" />
        <img alt="" src="images/Search icon.png" />
      </div>
      <div className={SearchBarCss.box}>
        <div
          className={SearchBarCss.dropdown}
          onClick={() => settoggle(!toggle)}
        >
          <h3>{state}</h3>
          <img alt="" src="images/Caret.png" />
        </div>
        <div
          className={SearchBarCss.dd_content}
          style={toggle ? { display: 'block' } : { display: 'none' }}
        >
          <ul>
            {countryList.map((cl, j) => (
              <li
                key={j}
                onClick={() => {
                  setstate(cl)
                  settoggle(false)
                }}
                className={state === cl ? SearchBarCss.active : null}
              >
                {cl}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button>SEARCH</button>{' '}
    </div>
  )
}

export default SearchBar
