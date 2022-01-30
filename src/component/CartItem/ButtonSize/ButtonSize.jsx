import { useState } from 'react';
import s from './ButtonSize.module.css'


export default function ButtonSize ({array, sizeIndex, styleBtn, activeStyleBtn}) {
   
   
    const [sizes, setSizes] = useState(array);
   
    const activeIndex = sizeIndex
 

const activBtn = sizes[activeIndex]
 const filterBtn = sizes.filter(item => item !== activBtn).slice(0, 1)
    
  
    

    return (<>
       
        <div>
      
        <span  className={s[activeStyleBtn]}>{activBtn}</span>
        <span   className={s[styleBtn]}>{ filterBtn }</span>
        </div>
        </>
        
    )
} 


