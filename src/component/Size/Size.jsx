import { useState, useCallback, useEffect } from 'react';
import { useDispatch, } from 'react-redux';
import {changeSizeSuccess} from '../../redux/cart-action';
import s from './size.module.css'


export default function Size({ items, sizeIndex }) {
    const dispatch = useDispatch();

    const [activeIndex, setActiveIndex] = useState(sizeIndex);

   const [sizes, setSizes] = useState(items);
    console.log(sizeIndex)

    
    useEffect(() => {
     dispatch(changeSizeSuccess(activeIndex))   
        
    }, [dispatch, activeIndex]);


    const onClickBtn = index => {
        setActiveIndex(index)
    }
    
    const makeClassName = useCallback(index => {
      return index ===activeIndex ? s.btnSizeActive : s.btnSize
    }, [activeIndex])

    return (
        <ul className={s.sizeList}>
            {  sizes.map((item, index) =>(
                 <li key={item} className={ makeClassName(index)}
                     onClick={() => onClickBtn(index)}>
                     {sizes[index]}
                     
                 </li>))}   
                

        </ul>
    )

}


      
