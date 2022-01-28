import React from 'react';

import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import s from './shopItem.module.css'

const ShopItem = ({ url, title, id, currencu, price, onAdd }) => {

    
    return (

    <li className={s.cardItem}>
      
        <div className={s.containerImg}>
             
                    

                  <Link to={`/${id}`} > <img src={url} className={s.shopImg} alt={title} /></Link> 
               
                
              
            <span onClick={onAdd} className={s.spanCart}><CartIcon /></span>
            </div>
        <p>{title}</p>
        <p><span>{currencu}</span> <span>{price}</span></p>
    
     
      
    </li>
);}

export default ShopItem ;