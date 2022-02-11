import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import s from './shopItem.module.css'

const ShopItem = ({ url, title, id, currencu, price, quantity}) => {

    const isInStock = quantity === 0;
    
    return (

    <li className={s.cardItem} >
      
            <div className={s.containerImg} >
             
                    

              <img src={url} className={s.shopImg} alt={title} />
         { isInStock  &&      <p className={s.stock}>OUT OF STOCK</p>}
               
                
              
                {isInStock ? '' : <Link to={`/${id}`}>
                    <span  className={s.spanCart}><CartIcon /></span>
                </Link>}
            </div>
            <p  style={{ color: isInStock ? 'gray' : 'black' }}>{title}</p>
        <p style={{ color: isInStock ? 'gray' : 'black' }}><span>{currencu}</span> <span>{price}</span></p>
    
     
      
    </li>
    )
}

ShopItem.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.string.isRequired,
    currencu: PropTypes.string,
    price: PropTypes.number,
   quantity: PropTypes.number
}

export default ShopItem ;