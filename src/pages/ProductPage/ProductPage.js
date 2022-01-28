import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {upDateProduct, addProductSuccess} from '../../redux/cart-action'
import { getProductSelector } from '../../redux/cart-selector';
import items from '../../data/clothes';
import Size from '../../component/CartItem/Size/Size.jsx';
import { allSize } from '../../data/allSize';
import foto1 from '../../data/images/foto1.png'
import s from './productPage.module.css';

console.log(items)

export default function ProductPage() {
  
   const dispatch = useDispatch()

    const { productId } = useParams();
    const item = items.find(item => item.id === productId); 
    console.log(item)
    
    useEffect(() => {
       dispatch(upDateProduct(item))
    }, [dispatch, item])

     const product= useSelector( getProductSelector)

    const addProductToCart = () => {
        dispatch(addProductSuccess(product))
    }
  console.log(product)
 const {title, description, indexSize, price,    currencu} = product
 
    return (
        <div className={s.container} >
             <div className={s.container} >
           <img src={foto1} alt={title} />
           <div className={s.sectionProduct}>
               <h1>{title}</h1>
               <section>
                   <h2>SIZE</h2>
                   <Size items={allSize} indexSize={indexSize}  activeStyleSize="btnSizeActive" styleSize="btnSize" />
               </section>
               <section>
                   <h2>PRICE</h2>
                   <p><span>{currencu} </span><span>{ price}</span></p>
                    </section>
                   
               <span onClick={addProductToCart } className={s.addBtn}>ADD TO CART</span>
               <p>{ description}</p>
               </div>
                   
      
</div>
          
       
</div>
        
     
    )
} 





//   <div className={s.container} >
//            <img src={foto1} alt={title} />
//            <div className={s.sectionProduct}>
//                <h1>{title}</h1>
//                <section>
//                    <h2>SIZE</h2>
//                    <Size items={allSize} indexSize={indexSize}  activeStyleSize="btnSizeActive" styleSize="btnSize" />
//                </section>
//                <section>
//                    <h2>PRICE</h2>
//                    <p><span>{currencu} </span><span>{ price}</span></p>
//                </section>
//                <span className={s.addBtn}>ADD TO CART</span>
//                <p>{ description}</p>
//                </div>
//                    
//       
//</div>