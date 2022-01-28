 import { createReducer } from "@reduxjs/toolkit";

import {
    addProductSuccess, addProductError,
    incrementCounterSuccess, decrementCounterSuccess,
    changeCurrentSuccess
} from './cart-action';


export const cartReducer = createReducer([], {

    [addProductSuccess]: (state, { payload }) => {
        const duplicate = state.find(item => item.id === payload.id);

        if (duplicate) {
            const filteredSate = state.filter(item => item.id !== duplicate.id)
            const product = {
                ...duplicate,
          counter: duplicate.counter + 1
            }
            return [...filteredSate, product]
        } else {
            return [...state, {
                ...payload,
                counter: 1
            }]
        }
    },
    
  
    [incrementCounterSuccess]: (state, { payload }) => state.map(item => {
        if (item.id === payload) {
           
            return {
                ...item,
                counter: item.counter + 1
            }
        } return item
    }),

    
      
         [decrementCounterSuccess]: (state, { payload }) => state.map(item => {
                if (item.id === payload && item.counter > 1) {
                   
                    return {
                        ...item,
                    counter: item.counter - 1}
                } return item
         }),
         
    [changeCurrentSuccess]: (state, { payload }) => state.map(item => 
      ( {
            ...item,
        currencu: payload})
    )
    

        
 
    })



export const globalCurrencuReducer = createReducer("$", {
   [changeCurrentSuccess]: (_, {payload})=> payload 
})    



export const errorCartReduser = createReducer(null, {
[addProductError]: (_, {payload}) => payload 
})



   