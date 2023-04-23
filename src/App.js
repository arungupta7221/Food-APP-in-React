import './index.css'
import Body from './components/Body'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './components/About'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Contact from './components/Contact'
import RestaurantMenu from './components/RestaurantMenu'
import Profile from './components/ProfileClassComponent'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <Profile /> */}
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile name="Arun" />} />
          <Route path="/restaurant/:id" element={<RestaurantMenu />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
