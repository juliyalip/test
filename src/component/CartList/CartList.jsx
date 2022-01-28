import React, {  useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getCartSelector } from '../../redux/cart-selector';
import {  incrementCounterSuccess, decrementCounterSuccess } from '../../redux/cart-action.js'
import CardItem from '../CartItem/CartItem';
import s from './cartList.module.css'
import foto1 from '../../data/images/foto1.png'


export default function CartList () {

    const dispatch = useDispatch();
    const items = useSelector(getCartSelector);
  
      
    const onIncrement = useCallback(id => {
        dispatch( incrementCounterSuccess (id))
    }, [dispatch])

    const onDecrement = useCallback( id => {
        dispatch(decrementCounterSuccess(id))
    }, [dispatch])


    return( <>
     
    <ul className={s.cartList}>
        {items.map(({ id, title, price,  currencu, counter, size}) => (
            <CardItem key={id}  title={title} url={foto1} size={size}
                price={price} counter={counter} currencu={currencu}
                increment={() => onIncrement(id)} decrement={() => onDecrement(id)} />
        ))}
        </ul>
    </>)
}

