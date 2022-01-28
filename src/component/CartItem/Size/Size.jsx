import React, { useCallback, useState, } from 'react';

import s from './size.module.css'



export default function Size({items, activeStyleSize ="activeSizeItem", styleSize="sizeItem"}) {

   const [activeIndex, setIndex] = useState(0);
   

    const saveActiveIndex = useCallback(index => {
        setIndex(index);
       
        
    },[])
    
     const makeOptionClassName = useCallback(index => {
    return index === activeIndex ? s[activeStyleSize] : s[styleSize];
  },[activeIndex, styleSize, activeStyleSize])


     return (
        <ul className={s.sizeList}>
             {items.map((item, index) => (
                 <li className={makeOptionClassName(index)}  key={item} onClick={() =>saveActiveIndex(index) }>{ item}</li>
        ))}
    </ul>
          
         

    )
}




//      const makeOptionClassName = useCallback(index => {
//     return index === activeIndex ? s.activeSizeItem : s.sizeItem;
//   },[activeIndex])