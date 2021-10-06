import React from 'react'
import SearchBarCss from './SearchBar.module.scss'

// Dummy Categgory List
const categoryList = [
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
  const [state, setstate] = React.useState({
    search: '',
    caterogy: 'All Categories',
  })
  const [toggle, settoggle] = React.useState(false)
  const handleChange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value })
  }

  // Get value of Search and Category
  const handleSubmit = () => {
    console.log(state)
  }
  return (
    <div className={SearchBarCss.container}>
      <div className={SearchBarCss.input}>
        <input
          type="text"
          placeholder="Search sneaker name"
          name="search"
          onChange={handleChange}
        />
        <img alt="" src="images/Search icon.png" />
      </div>
      <div className={SearchBarCss.box}>
        <div
          className={SearchBarCss.dropdown}
          onClick={() => settoggle(!toggle)}
        >
          <h3>{state.caterogy}</h3>
          <img alt="" src="images/Caret.png" />
        </div>
        <div
          className={SearchBarCss.dd_content}
          style={toggle ? { display: 'block' } : { display: 'none' }}
        >
          <ul>
            {categoryList.map((cl, j) => (
              <li
                key={j}
                onClick={() => {
                  setstate({ ...state, caterogy: cl })
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
      <button onClick={() => handleSubmit()}>SEARCH</button>
    </div>
  )
}

export default SearchBar
