import React from 'react';
import PropTypes from 'prop-types';
import s from '../cartItem.module.css'

 function Stats({ increment, decrement, counter }) {

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
};


Stats.propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
}


export default Stats;