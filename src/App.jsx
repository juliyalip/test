import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import Container from './component/Container/Container';
import AllPage from './pages/AllPage/AllPage';
import CartPage from './pages/CartPage/CartPage';
import ProductPage from './pages/ProductPage/ProductPage';
import items from './data/clothes'



export default function  App() {


 
   
    return (
      <Container >
      <Routes>
        <Route path="/" element={<AllPage />} />
          <Route path="/cart" element={<CartPage  />} />
          <Route path="/:productId" element={<ProductPage items={ items}/>} />
        
      </Routes>
  
 </Container>
   )

}
 
