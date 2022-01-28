import React, { useEffect } from 'react';
import CartList from '../../component/CartList/CartList';


export default function CartPage ({toggleModal}){
    useEffect(() => {
      toggleModal()
  }, [toggleModal])
   
   
  return (
             <section>
            <h1>CART</h1>
            <hr />
                <CartList/>
        </section>
        )

}

