export const homeStore = {
    namespaced: true,
    state: {
        homeData: []
    },
    action: {},
    mutations: {
        setHomeData(state, payload) {
            state.homeData = payload
        }
    }
}
