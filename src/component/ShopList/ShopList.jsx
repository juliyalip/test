import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ShopItem from '../ShopItem/ShopItem';

import { addProductSuccess , upDateProduct} from '../../redux/cart-action';

import {useDispatch } from 'react-redux';


//  import items from '../../data/clothes'
import s from './shopList.module.css';


const ShopList = ({ title, items }) => {
    
    const dispatch = useDispatch();
  
    const handleAddProduct = useCallback(productId => {
        const product = items.find(item => item.id === productId);
           
        dispatch(addProductSuccess(product))
  
    }, [dispatch, items])

    const handleOpenProduct = id => {
        const product = items.find(item => item.id === id);
        dispatch(upDateProduct(product))
    }
  
    return (
        <section>
            {title && <h1>{title}</h1>}
            <ul className={s.shopList}>
                {items.map(({ id, url, title, currencu, price, quantity }) => (
             
                    <ShopItem key={id} openProduct={() => handleOpenProduct(id)} url={url[0]} quantity={quantity} title={title} id={id} currencu={currencu} price={price}
                        onAdd={() => { handleAddProduct(id) }} />
                ))}
            </ul>
        </section>);
}
  export default ShopList;
