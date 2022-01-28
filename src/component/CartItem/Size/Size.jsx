import React, { useCallback,  useEffect,  useState, } from 'react';
import { useDispatch } from 'react-redux';
import s from './size.module.css'
import { changeIndexSizeSuccess} from '../../../redux/cart-action'



export default function Size({items,  indexSize, activeStyleSize ="activeSizeItem", styleSize="sizeItem"}) {
    const dispatch = useDispatch();
   const [activeIndex, setIndex] = useState(indexSize);
   
    useEffect(() => {
        dispatch(changeIndexSizeSuccess(activeIndex))
    }, [dispatch, activeIndex ])

    const saveActiveIndex = useCallback(index => {
        setIndex(index);
        console.log('индекс во время нажатия', activeIndex)
        
    },[activeIndex])
    
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