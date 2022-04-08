import Vue from 'vue'
import App from './App.vue'
import {myButton, mySelect} from "./g-components";
import {router} from "./router";
import {store} from "./store/index.store";

Vue.config.productionTip = false

Vue.component('MyButton', myButton)

Vue.component('MySelect', mySelect)

Vue.filter('toUpperCase', function (value) {
    return value.toUpperCase();
})

Vue.filter('formatMoney', function (value) {
    return '$' + value.toFixed(2)
})


new Vue({
    render: h => h(App),
    router: router,
    store: store
}).$mount('#app')

