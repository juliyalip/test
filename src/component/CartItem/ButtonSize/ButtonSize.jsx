import React from 'react';
import PropTypes from 'prop-types';
import s from './ButtonSize.module.css'


 function ButtonSize ({array, sizeIndex, styleBtn, activeStyleBtn}) {
   
   
    const sizes =array
   
    const activeIndex = sizeIndex
 

const activBtn = sizes[activeIndex]
 const filterBtn = sizes.filter(item => item !== activBtn).slice(0, 1)
    
     return (<>
       
        <div>
      
        <span className={s[activeStyleBtn]}>{activBtn}</span>
        <span className={s[styleBtn]}>{ filterBtn }</span>
        </div>
        </>
        
    )
};

ButtonSize.propTypes = {
    array: PropTypes.arrayOf(PropTypes.string),
    sizeIndex: PropTypes.number,
    styleBtn: PropTypes.string,
   activeStyleBtn: PropTypes.string
}

export default ButtonSize;


