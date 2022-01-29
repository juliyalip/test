import React from 'react';
import {Link} from 'react-router-dom'
import Size from './Size/Size';
import{ allSize} from '../../data/allSize.js'
import Stats from './Stats/Stats';
import s from './cartItem.module.css'




const CardItem = ({ title,  price, currencu, indexSize, updateCurrencu, url, counter, increment, decrement }) =>{


  
return (
 

  
  <li className={s.container}>

    <div>
    <p>{title}</p>
      <p onClick={updateCurrencu}>{currencu} {price}</p>
         <Size items={allSize} indexSize={indexSize }/> 
   </div> 



    
    <Stats counter={counter} increment={increment} decrement={decrement}
    />
   

      <img src={url} width={105} alt={title} className={s.img} />
    
        </li> )}


export default CardItem;