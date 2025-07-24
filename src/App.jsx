import { useState } from "react";
import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";



function App() {
  const [cartItem, setCartItem] = useState([]);
 

  return (
    <>

    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/shop' element={<Shop cartItem={cartItem} setCartItem={setCartItem}/>}/>
      <Route path='/cart' element={<Cart cartItem={cartItem} setCartItem={setCartItem}/>}/>
    </Routes>
 
    </>
  )
}

export default App
