import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTotalPriceSelector, getGlobalCurrencuSelector } from '../../redux/cart-selector';
import {changeCurrentSuccess} from '../../redux/cart-action'
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import CartList from "../CartList/CartList";
import s from './modalCart.module.css'

const modalRoot = document.querySelector('#modal-root')

export default function ModalCart({ toggleModal }) {

    const dispatch = useDispatch();
    const globalCurrencu  = useSelector(getGlobalCurrencuSelector) 

    useEffect(() => {
        dispatch(changeCurrentSuccess(globalCurrencu));
        
    }, [dispatch, globalCurrencu])
    
    const totalPrice = useSelector(getTotalPriceSelector);
    useEffect(() => {
        const handleKeyDown = e => {
           
            if (e.code === 'Escape') {
                toggleModal()
            }
            
        }; window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            
          
        }
    })
  
    
   


    const clickBackDrop = e=>{
        if (e.currentTarget === e.target) {
            toggleModal()
        }
    }

    return createPortal(
        <div className={s.backDrop} onClick={ clickBackDrop}>
            <div className={s.content}>
                <h1>My Bag</h1>
                <CartList />

                <p className={s.priceContainer}><strong>Total</strong> <strong >{totalPrice}</strong></p>
                

                <div className={s.priceContainer}>
                    <Link to="/cart" className={s.btn}>VIEW BAG</Link>
                    <button type="button" className={s.btnZakaz} >CHECK OUT</button>
                   
                </div>
                
            </div>
            
        </div>, modalRoot
    )
}