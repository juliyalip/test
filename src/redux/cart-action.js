import { createAction} from "@reduxjs/toolkit";

export const addProductSuccess = createAction('addProductSuccess',
    product => ({
        payload: {
            id: product.id,
            title: product.title,
            size: [...product.size],
          
            counter: 1,
            currencu: '$',
            description: product.description,
            price: product.price,
        }
    }));


export const addProductError = createAction('addProductError');
export const changeCurrentSuccess = createAction('changeCarrent')
export const incrementCounterSuccess = createAction('incrementCounterSuccess');


export const decrementCounterSuccess = createAction('decrementCounterSuccess');




