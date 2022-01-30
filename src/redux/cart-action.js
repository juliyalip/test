import { createAction} from "@reduxjs/toolkit";

export const addProductSuccess = createAction('addProductSuccess',
    product => ({
        payload: {
          ...product,        
            counter: 1,
           sizeIndex: product.sizeIndex
            
        }
    }));


export const addProductError = createAction('addProductError');
export const changeCurrentSuccess = createAction('changeCarrent')
export const incrementCounterSuccess = createAction('incrementCounterSuccess');
export const decrementCounterSuccess = createAction('decrementCounterSuccess');

export const upDateProduct = createAction('upDateProduct',  product => ({
        payload: {
          ...product,        
          
        }
         
    })
)


export const changeSizeSuccess = createAction('changeSizeSuccess');
export const changeColorSucces = createAction('changeColorSuccess');


