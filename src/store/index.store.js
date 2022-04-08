import Vue from "vue";
import Vuex from "vuex";
import {homeService} from "../services/homeService";

Vue.use(Vuex);

export const store = new Vuex.Store({
        state: {
            count: 0,
            homeProducts: [],
            human: {}
        },
        mutations: {
            increment(state) {
                state.count++;
            },
            decrement(state) {
                state.count--;
            },
            setHomeProducts(state, products) {
                state.homeProducts = products;
            },
            setHuman(state, payload) {
                state.human = payload
            }
        },
        actions: {
            async loadHomeProducts({commit}) {
                const resp = await homeService.getHome();
                commit('setHomeProducts', resp.data);
            }
        }
    }
)


