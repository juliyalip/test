import React, {useState, useCallback} from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import Container from './component/Container/Container';
import AllPage from './pages/AllPage/AllPage';
import CartPage from './pages/CartPage/CartPage';
import ProductPage from './pages/ProductPage/ProductPage'


export default function  App() {
  const [showModal, setShowModal] = useState(false);

    
    const openModal = useCallback(() => {
  setShowModal(prevShowModal =>! prevShowModal)
}, [])

 
   
    return (
      <Container openModal={openModal} showModal={showModal} >
      <Routes>
        <Route path="/" element={<AllPage />} />
          <Route path="/cart" element={<CartPage toggleModal={openModal} />} />
          <Route path="/:productId"  element={<ProductPage  />} />
      </Routes>
  
 </Container>
   )

}

 
