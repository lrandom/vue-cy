import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component('MyButton',{
    data() {
        return{
            buttonText:'myButton'
        }
    },
    template:'<button>{{buttonText}}</button>'
})

Vue.component('MySelect',{
    template:`<select><option>Vui lòng chọn</option></select>`
})

Vue.filter('toUpperCase', function (value) {
    return value.toUpperCase();
})

Vue.filter('formatMoney', function (value) {
    return '$' + value.toFixed(2)
})


new Vue({
    render: h => h(App),
}).$mount('#app')

