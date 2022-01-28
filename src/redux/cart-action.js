import { createAction} from "@reduxjs/toolkit";

export const addProductSuccess = createAction('addProductSuccess',
    product => ({
        payload: {
            id: product.id,
            title: product.title,
          indexSize: product.indexSize,          
            counter: 1,
            currencu: "$",
            description: product.description,
            price: product.price,
        }
    }));


export const addProductError = createAction('addProductError');
export const changeCurrentSuccess = createAction('changeCarrent')
export const incrementCounterSuccess = createAction('incrementCounterSuccess');


export const decrementCounterSuccess = createAction('decrementCounterSuccess');




export const changeIndexSizeSuccess = createAction('changeIndexSize');



export const upDateProduct = createAction('upDateProduct', (product) => (
     { payload: {
        id: product.id,
        title: product.title,
        description: product.description,
        currencu: product.currencu,
        price: product.price,
        indexSize: product.indexSize
    }})
)