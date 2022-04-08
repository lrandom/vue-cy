export const cartStore = {
    namespaced: true,
    state: {
        cartData: []
    },
    action: {},
    mutations: {
        setCartData(state, payload) {
            state.cartData = payload
        }
    }
}
