import { configureStore } from '@reduxjs/toolkit';

import { cartReducer, errorCartReduser, globalCurrencuReducer, productReducer} from './cart-reducer';


export const store = configureStore({
    reducer: {
        cartProducts: cartReducer,
        globalCurrencu: globalCurrencuReducer,
        error: errorCartReduser,
       product: productReducer
    
    },
    middleware: (getDefaultMiddleware)=> [...getDefaultMiddleware()]
})

