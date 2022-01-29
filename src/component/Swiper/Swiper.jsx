import React, { useState } from 'react';
import s from './swiper.module.css'




export default function Swiper({images}) {

     const [activeIndex, setActiveIndex] = useState(0);
        const [items, setItems] = useState(images);
    
    const getActiveImage = ()=> items[activeIndex]
    
    const image = getActiveImage()
  

    const onClickImage = indexImg => {
      setActiveIndex(indexImg)
    }

      
        
    return (<div className={s.container}>
    
        <ul className={s.imgList}>
            {items.map((item, index) =>
                <li key={index} onClick={() => onClickImage(index)}>
                    <img src={items[index]} alt="foto" width="90" />
            </li>
            )
              }
        </ul>
        <img src={image} alt="foto" width={500} className={ s.activeImg}/>
      
      
      
        </div>
    )
}
