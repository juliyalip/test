import React from 'react';

import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import s from './shopItem.module.css'

const ShopItem = ({ url, title, id, currencu, price, onAdd , openProduct, quantity}) => {

    const isInStock = quantity === 0;
    
    return (

    <li className={s.cardItem} >
      
            <div className={s.containerImg}             >
             
                    

                <Link to={`/${id}`} > <img src={url} className={s.shopImg} alt={title} onClick={ openProduct}/></Link> 
         { isInStock  &&      <p className={s.stock}>OUT OF STOCK</p>}
               
                
              
    {  isInStock?    ''    :      <span onClick={onAdd} className={s.spanCart}><CartIcon /></span>}
            </div>
            <p  style={{ color: isInStock ? 'gray' : 'black' }}>{title}</p>
        <p style={{ color: isInStock ? 'gray' : 'black' }}><span>{currencu}</span> <span>{price}</span></p>
    
     
      
    </li>
);}

export default ShopItem ;