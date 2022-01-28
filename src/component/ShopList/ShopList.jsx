import React, {useCallback} from 'react';
import ShopItem from '../ShopItem/ShopItem';

import { addProductSuccess } from '../../redux/cart-action';

import {useDispatch } from 'react-redux';
import foto1 from '../../data/images/foto1.png';
import items from '../../data/clothes'
import s from './shopList.module.css';


const ShopList = ({ title}) => {
  
    const dispatch = useDispatch();

      const handleAddProduct = useCallback(productId => {
          const product = items.find(item => item.id === productId);
         
   dispatch(addProductSuccess(product))

             } , [dispatch])

    return(
    <section>
        {title && <h1>{title}</h1>}
        <ul className={s.shopList}>
                {items.map(({ id, url, title, currencu, price,  }) => (
           
                    <ShopItem key={id} url={foto1}  title={title} id={id} currencu={currencu} price={price}
                        onAdd={() => { handleAddProduct(id) }} />
        ))}
            </ul>
    </section>);}





export default ShopList;
