import React from 'react';
import { useNavigate,  useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProductSuccess} from '../../redux/cart-action'
import { getProductSelector } from '../../redux/cart-selector';
import {openProductSuccess } from '../../redux/cart-action'
import Size from '../../component/Size/Size';
import ChangeColor from '../../component/ChangeColor/ChangeColor';
import items from '../../data/clothes'
import s from './productPage.module.css';
import { useEffect } from 'react';


export default function ProductPage() {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
     const product = items.find(item => item.id === productId);

    useEffect(() => {
        dispatch(openProductSuccess(product))
        
    }, [dispatch, product])

    const isOpeningProduct = useSelector(getProductSelector);
    console.log(isOpeningProduct)


     const addProductToCart = () => {
         dispatch(addProductSuccess(isOpeningProduct));
         navigate('/')
     }
    
const { title, description, url, sizeIndex, sizes, currencu, price } = product
    return (
        <div className={s.container}>


             <ChangeColor images={url} />
       
       
       
             <div className={s.sectionProduct}>
 
               
                     <h2>{title}</h2>
                  
                       
                <section className={s.sectionTitle}>
                           
                    <h2>SIZE</h2>
                    <Size items={sizes} sizeIndex={sizeIndex} />
                                                       
                                
                </section>
                <section className={s.sectionTitle}>
                    <h2>PRICE</h2>
                    <p><span>{currencu} </span><span>{price}</span></p>
                 </section>
 
 
                                          
                <span onClick={addProductToCart} className={s.addBtn}>ADD TO CART</span>
                <p>{description}</p>
            </div>
             
 
            
             
             
             </div>
          
        
    )
}


//  export default function ProductPage() {
//     
//      const dispatch = useDispatch();
//      const navigate = useNavigate()
//      const product = useSelector(getProductSelector);
//      console.log(product);
//  
//      const addProductToCart = () => {
//          dispatch(addProductSuccess(product));
//          navigate('/')
//      }
//      const { title, description, url, sizeIndex, sizes, currencu, price } = product
//      
//    
//      return (
//      
//          <div className={s.container}>
//  
//             
//                <ChangeColor images={url} />
//        
//        
//        
//              <div className={s.sectionProduct}>
//  
//                
//                      <h2>{title}</h2>
//                   
//                        
//                 <section className={s.sectionTitle}>
//                            
//                     <h2>SIZE</h2>
//                     <Size items={sizes} sizeIndex={sizeIndex} />
//                                                        
//                                 
//                 </section>
//                 <section className={s.sectionTitle}>
//                     <h2>PRICE</h2>
//                     <p><span>{currencu} </span><span>{price}</span></p>
//                  </section>
//  
//  
//                                           
//                 <span onClick={addProductToCart} className={s.addBtn}>ADD TO CART</span>
//                 <p>{description}</p>
//             </div>
//              
//              </div>
//           
//             
//      )
//  }


          