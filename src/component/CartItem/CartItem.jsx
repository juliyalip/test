import React from 'react';
import {Link} from 'react-router-dom'
import Size from './Size/Size'
import Stats from './Stats/Stats';
import s from './cartItem.module.css'




const CardItem = ({ title,  price, currencu, updateCurrencu, url, counter, increment, decrement, size }) =>{


  
return (
 

  
  <li className={s.container}>

    <div>
    <p>{title}</p>
      <p onClick={updateCurrencu}>{currencu} {price}</p>
      
        <Size items={size} activeStyleSize ="activeSizeItem" />
   </div> 



    
    <Stats counter={counter} increment={increment} decrement={decrement}
    />
   

      <img src={url} width={105} alt={title} className={s.img} />
    
        </li> )}


export default CardItem;