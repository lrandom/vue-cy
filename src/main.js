import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component('button',{
    data() {
        return{
            buttonText:'Button'
        }
    },
    template:`<button>{{buttonText}}</button>`
})

Vue.component('select',{
    template:`<select><option>Vui lòng chọn</option></select>`
})

new Vue({
    render: h => h(App),
}).$mount('#app')

Vue.filter('toUpperCase', function (value) {
    return value.toUpperCase();
})

Vue.filter('formatMoney', function (value) {
    return '$' + value.toFixed(2)
})
