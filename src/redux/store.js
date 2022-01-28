import { configureStore } from '@reduxjs/toolkit';

import { cartReducer, errorCartReduser, globalCurrencuReducer} from './cart-reducer';


export const store = configureStore({
    reducer: {
        cartProducts: cartReducer,
        globalCurrencu: globalCurrencuReducer,
        error: errorCartReduser

    
    },
    middleware: (getDefaultMiddleware)=> [...getDefaultMiddleware()]
})

