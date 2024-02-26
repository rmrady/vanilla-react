import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Shop from "./pages/shop/Shop.jsx";
import Cart from './pages/cart/Cart.jsx';
import Nav from './components/nav.jsx';
import { Shopcontextprovider } from './context/shopcont.jsx';


function App() {
  return (
    <div>
      <Shopcontextprovider>
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
      </Shopcontextprovider>
    </div>
  )
}

export default App