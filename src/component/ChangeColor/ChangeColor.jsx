import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {changeColorSucces} from '../../redux/cart-action'
import s from './changeColor.module.css'




function ChangeColor({images}) {
const dispatch = useDispatch()
     const [activeIndex, setActiveIndex] = useState(0);
        const [items, setItems] = useState(images);
    
    const getActiveImage = ()=> items[activeIndex]
    
    const image = getActiveImage()
  
    useEffect(() => {
        dispatch(changeColorSucces(activeIndex))
    }, [dispatch, activeIndex])
    

    const onClickImage = indexImg => {
        setActiveIndex(indexImg);

    }

     console.log(activeIndex) 
        
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

ChangeColor.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string)
}


export default ChangeColor;