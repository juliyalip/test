import React from 'react';
import { useSelector } from 'react-redux';
import {getCartSelector} from '../../redux/cart-selector'
import ButtonSize from '../../component/CartItem/ButtonSize/ButtonSize';
import Swiper from '../../component/Swiper/Swiper'
import s from './cartPage.module.css'


export default function CartPage (){
 
        const products = useSelector(getCartSelector);

  return (
          <section className={s.allSection}>
                  
                  <h2 className={s.title}>CART</h2>
                  <ul>
                          {products.map(({
                                  id, url, title, currencu, price,
                                   sizeIndex, sizes, 
                          }) => {
                                  const subTitle = title.split(' ')
                                  const stTitle = subTitle.splice(0, 1).join('');
                                  const sbTitle = subTitle.join(' ')
                                  
                                  return (

                                          <li className={s.container} key={id}>
                                                  <div>
                                                  <h3 className={s.subtitle}>{stTitle}</h3>
                                                  <span>{sbTitle }</span>
                                          <p><span>{currencu}</span> <span>{ price}</span></p>
                                                          <ButtonSize array={sizes} sizeIndex={sizeIndex} styleBtn="bigBtn" activeStyleBtn="activeBigBtn" /> 
                                                  </div>   
                                  <Swiper items={url}  />              
                                  </li>
                          )
                          } )}
                  </ul>  
       
        </section>
        )

}



