import React from 'react';
import PropTypes from 'prop-types';
import ShopItem from '../ShopItem/ShopItem';
import {openProductSuccess } from '../../redux/cart-action';
import {useDispatch } from 'react-redux';
import s from './shopList.module.css';


const ShopList = ({ title, items }) => {
    
    const dispatch = useDispatch();
  
 

    const handleOpenProduct = id => {
        const product = items.find(item => item.id === id);
        dispatch(openProductSuccess(product))
    }
  
    return (
        <section>
          
            {title && <h1>{title}</h1>}
            <ul className={s.shopList}>
                {items.map(({ id, url, title, currencu, price, quantity }) => (
             
                    <ShopItem key={id} openProduct={() => handleOpenProduct(id)} url={url[0]} quantity={quantity} title={title} id={id} currencu={currencu} price={price}
                    />
                ))}
            </ul>
        </section>);
};


ShopList.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array.isRequired
}
  export default ShopList;
