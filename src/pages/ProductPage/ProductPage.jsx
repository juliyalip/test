import React from 'react';
import { useNavigate } from 'react-router-dom';
  import { useDispatch, useSelector } from 'react-redux';
  import { addProductSuccess} from '../../redux/cart-action'
import {getProductSelector} from '../../redux/cart-selector'
import Size from '../../component/Size/Size';
import ChangeColor from '../../component/ChangeColor/ChangeColor';
import s from './productPage.module.css';


export default function ProductPage() {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const product = useSelector(getProductSelector);
    console.log(product);

    const addProductToCart = () => {
        dispatch(addProductSuccess(product));
        navigate('/')
    }
    const { title, description, url, sizeIndex, sizes, currencu, price } = product
    
    
    return (
        <div className={s.container}>


              <ChangeColor images={url} />
      
      
      
           <div className={s.sectionProduct}>
               <h2>{title}</h2>
                      
               <section className={s.sectionTitle}>
                          
                   <h2>SIZE</h2>
                   <Size items={sizes} sizeIndex={sizeIndex} />
                                                      
                               
               </section>
               <section className={s.sectionTitle}>
                   <h2>PRICE</h2>
                   <p><span>{currencu} </span><span>{price}</span></p>
               </section>
                           
               <span onClick={addProductToCart} className={s.addBtn}>ADD TO CART</span>
               <p>{description}</p>
           </div>
            
         </div>
    )
}


          