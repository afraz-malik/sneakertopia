import './App.css'
import HomePage from './pages/HomePage'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import { HashRouter as Router, Link, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/details" component={ProductDetails} />
    </Router>
  )
}

export default App
