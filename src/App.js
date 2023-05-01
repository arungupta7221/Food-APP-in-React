import './index.css'
import Body from './components/Body'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './components/About'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Contact from './components/Contact'
import RestaurantMenu from './components/RestaurantMenu'
import Profile from './components/ProfileClassComponent'
import { Provider } from 'react-redux'
import store from './components/store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        {/* <Profile /> */}
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile name="Arun" />} />
          <Route path="/restaurant/:id" element={<RestaurantMenu />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
