import React from 'react';
import s from '../cartItem.module.css'

export default function Stats({ increment, decrement, counter }) {

    return (
        <>
    


    <div className={s.containerBtnCount}>
            <button type="button"
                onClick={increment} >+</button>
        <span className={s.count }>
            {counter}
        </span>
            <button type="button"
                onClick={decrement}>-</button>
            </div>
            </>)
}