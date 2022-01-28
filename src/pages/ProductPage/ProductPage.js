import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import items from '../../data/clothes';
import Size from '../../component/CartItem/Size/Size.jsx';
import foto1 from '../../data/images/foto1.png'
import s from './productPage.module.css'

export default function ProductPage() {
    const dispatch = useDispatch();

    const { productId } = useParams();

    const product = items.find(item => item.id === productId);
console.log(product)

 
    return (
        <div>
            <div className={s.container}>
                <img src={foto1} width="450" alt={product.title} />

                <div className={s.sectionProduct}>
                    <h1>{product.title}</h1>

                    <section>
                        <h2>SIZE</h2>
                        <Size items={product.size} activeStyleSize="btnSizeActive"  styleSize="btnSize" />
                    </section>

                    <section>
                        <h2>PRICE</h2>
                        <p>{ product.currencu} { product.price}</p>
                    </section>

                    <span className={s.addBtn}>ADD TO CART</span>
                    <p>{product.description}</p>
                </div>
            </div>
</div>
        
     
    )
} 