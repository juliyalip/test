import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTotalPriceSelector, getGlobalCurrencuSelector, getTotalCartSelector } from '../../redux/cart-selector';
import {changeCurrentSuccess} from '../../redux/cart-action'
import { createPortal } from "react-dom";

import CartList from "../CartList/CartList";
import s from './modalCart.module.css'

const modalRoot = document.querySelector('#modal-root')



function ModalCart({ toggleModal }) {

    const navigate = useNavigate()
    
    const dispatch = useDispatch();
    
    const globalCurrencu  = useSelector(getGlobalCurrencuSelector) 
const value = useSelector(getTotalCartSelector)
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

    const getCartLink = () => {
        toggleModal();
        navigate('/cart')
}
 
    return createPortal(
        <div className={s.backDrop} onClick={ clickBackDrop}>
            <div className={s.content}>
                <p><strong>My Bag </strong><span>{ value} items</span></p>
                <CartList />

                <p className={s.priceContainer}><strong>Total</strong> <strong >{totalPrice}</strong></p>
                

                <div className={s.priceContainer}>
                    <button type="button" className={s.btn} onClick={getCartLink}>VIEW BAG</button>
                    <button type="button" className={s.btnZakaz} >CHECK OUT</button>
                   
                   
                </div>
                
            </div>
            
        </div>, modalRoot
    )
};

ModalCart.propTypes = {
    toggleModal: PropTypes.func.isRequired
}

export default ModalCart;