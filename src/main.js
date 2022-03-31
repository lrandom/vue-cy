import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')

Vue.filter('toUpperCase', function (value) {
    return value.toUpperCase();
})

Vue.filter('formatMoney', function (value) {
    return '$' + value.toFixed(2)
})
