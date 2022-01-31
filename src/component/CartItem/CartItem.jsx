import React from 'react';
import PropTypes from 'prop-types';
import ButtonSize from './ButtonSize/ButtonSize';
import Stats from './Stats/Stats';
import s from './cartItem.module.css'




const CardItem = ({ title, colorIndex,  price, currencu, sizes, sizeIndex,  url, counter, increment, decrement }) =>{

  const image = url[colorIndex]
 
return (
 

  
  <li className={s.container}>

  
        <div>
    <p>{title}</p>
      <p >{currencu} {price}</p>
   
     <ButtonSize  array={sizes} sizeIndex={sizeIndex}  styleBtn ="btn" activeStyleBtn="activeBtn" />   
   </div> 



    
    <Stats counter={counter} increment={increment} decrement={decrement}
    />
   

      <img src={ image} width={105} alt={title} className={s.img} />
 
    
    </li>)
}
        

CardItem.propTypes = {
  title: PropTypes.string,
  colorIndex: PropTypes.number,
  price: PropTypes.number,
  currencu: PropTypes.string,
  sizes: PropTypes.arrayOf(PropTypes.string),
  sizeIndex: PropTypes.number,
  url: PropTypes.arrayOf(PropTypes.string),
  counter: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  
}

export default CardItem;

