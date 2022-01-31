import React from 'react';
import { useNavigate } from 'react-router-dom';
  import { useDispatch, useSelector } from 'react-redux';
  import { addProductSuccess} from '../../redux/cart-action'
import {getProductSelector} from '../../redux/cart-selector'
import Size from '../../component/Size/Size';
import ChangeColor from '../../component/ChangeColor/ChangeColor';
import s from './productPage.module.css';


export default function ProductPage() {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const product = useSelector(getProductSelector);
    console.log(product);

    const addProductToCart = () => {
        dispatch(addProductSuccess(product));
        navigate('/')
    }
    const { title, description, url, sizeIndex, sizes, currencu, price } = product
    
    
    return (
        <div className={s.container}>


              <ChangeColor images={url} />
      
      
      
           <div className={s.sectionProduct}>
               <h1>{title}</h1>
                      
               <section>
                          
                   <h2>SIZE</h2>
                   <Size items={sizes} sizeIndex={sizeIndex} />
                                                      
                               
               </section>
               <section>
                   <h2>PRICE</h2>
                   <p><span>{currencu} </span><span>{price}</span></p>
               </section>
                           
               <span onClick={addProductToCart} className={s.addBtn}>ADD TO CART</span>
               <p>{description}</p>
           </div>
            
         </div>
    )
}

//  export default function ProductPage({ items }) {
//       
//      const dispatch = useDispatch();
//       
//       
//      const [product, setProduct] = useState(null);
//       
//      const [products, setItems] = useState(items)
//      const { productId } = useParams()
//      console.log(productId);
//      console.log(items)
//        
//      const findProduct = useMemo(() => {
//          return products.find(product => product.id === productId)
//      }, [products, productId]) ;
//  
//  
//      useEffect(() => {
//          const upDate = () => {
//              dispatch(upDateProduct(findProduct))
//          };
//          upDate()
//     }, [findProduct, dispatch])
//           
//      const addProductToCart = () => {
//            
//      }
//  
//      const stateProduct = useSelector(getProductSelector);
//      console.log(stateProduct)
//      const { title, description, sizeIndex, sizes, price, url, currencu } =  findProduct;
//         
//       
//      return (
//          <div className={s.container}>
//                  
//              <ChangeColor images={url} />
//         
//         
//         
//              <div className={s.sectionProduct}>
//                  <h1>{title}</h1>
//                         
//                  <section>
//                             
//                      <h2>SIZE</h2>
//                      <Size items={sizes} sizeIndex={sizeIndex} />
//                                                         
//                                  
//                  </section>
//                  <section>
//                      <h2>PRICE</h2>
//                      <p><span>{currencu} </span><span>{price}</span></p>
//                  </section>
//                              
//                  <span onClick={addProductToCart} className={s.addBtn}>ADD TO CART</span>
//                  <p>{description}</p>
//              </div>
//          </div>)
//  }
     


/////////////////////////////////////////////////////////////////////////////////////////////

//export default function ProductPage({ items }) {
//      
//       const navigate = useNavigate()
//       const dispatch = useDispatch()
// 
//    
//       const { productId } = useParams();
//   
//    const item = items.find(item => item.id === productId);
//     
//        
//       console.log("Итем кокорій смотрим - нашли с массива", item)
//       
//       useEffect(() => {
//           dispatch(upDateProduct(item))
//       }, [dispatch, item])
//   
//      const product = useSelector(getProductSelector);
//
//      console.log("продукт которі рендерим -вернул селектор стейт", product);
//      
//       const addProductToCart = () => {
//           dispatch(addProductSuccess(product));
//           console.log(product)
//           navigate('/')
//       }
//   
//      const { title, description, sizeIndex, sizes, price, url, currencu } = product
//     
//   
//    
//       return (
//           
//
//           <div className={s.container} >
//              <ChangeColor images={url} />  
//    
//    
//    
//                    <div className={s.sectionProduct}>
//                    <h1>{title}</h1>
//                    
//                    <section>
//                        
//                            <h2>SIZE</h2>
//                       <Size  items={sizes} sizeIndex={sizeIndex}/>        
//                                                    
//                             
//                        </section>
//                        <section>
//                            <h2>PRICE</h2>
//                            <p><span>{currencu} </span><span>{price}</span></p>
//                        </section>
//                         
//                        <span onClick={addProductToCart} className={s.addBtn}>ADD TO CART</span>
//                        <p>{description}</p>
//                    </div>
//              
//           
//               </div>
//    
//          
//          
//           
//        
//       )
//   }
//      
//   
           //  <Size  items={sizes} sizeIndex={sizeIndex}/>

       

        ///////////////////////////////////////////////////////////////////////
          