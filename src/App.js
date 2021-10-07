import './App.css'
import HomePage from './pages/HomePage/HomePage'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import { HashRouter as Router, Route } from 'react-router-dom'
import ComparePage from './pages/ComparePage/ComparePage'
import SearchPage from './pages/SearchPage/SearchPage'
function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/details" component={ProductDetails} />
      <Route exact path="/compare" component={ComparePage} />
      <Route exact path="/search" component={SearchPage} />
    </Router>
  )
}

export default App
