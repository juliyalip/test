import { createReducer } from "@reduxjs/toolkit";


import {
    addProductSuccess, addProductError,
    incrementCounterSuccess, decrementCounterSuccess,
    changeCurrentSuccess, upDateProduct, changeSizeSuccess
   , changeColorSucces
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
                counter: 1,
                sizeIndex: payload.sizeIndex
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

    
      
    [decrementCounterSuccess]: (state, { payload }) => {
       
       const array = state.map(item => {
            if (item.id === payload) {
                   
                return {
                    ...item,
                    counter: item.counter - 1
                }
            } return item
       }); return array.filter(item => item.counter > 0);
    },
    
   
         

         

    [changeCurrentSuccess]: (state, { payload }) => state.map(item =>
    ({
        ...item,
        currencu: payload
    })
    ),

    

        
 
});


export const productReducer = createReducer({}, {
    [upDateProduct]: (_, { payload }) => payload,

    [changeCurrentSuccess]: (state, { payload }) => ({
        ...state,
        currencu: payload
    }),

  

    [changeSizeSuccess]: (state, { payload }) =>( {
        ...state,
        sizeIndex: payload

    }),
    [changeColorSucces]: (state, { payload }) => ({
        ...state,
        colorIndex: payload
    })

})

///////////////////////////////////////////////////////

export const globalCurrencuReducer = createReducer("$", {
   [changeCurrentSuccess]: (_, {payload})=> payload 
})    

////////////////////////////////////////////////////////////////////

export const errorCartReduser = createReducer(null, {
[addProductError]: (_, {payload}) => payload 
})


