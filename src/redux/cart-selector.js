export const getCartSelector = state => state.cartProducts;

export const getTotalCartSelector = state => {
    const carts = getCartSelector(state)
    return carts.length
};

export const getTotalPriceSelector = state => {
    const carts = getCartSelector(state);

    const totalPrice = carts.reduce((acc, { counter, price }) => { return acc + counter * price }, 0)

    return totalPrice
};



export const getGlobalCurrencuSelector = state=> state.globalCurrencu