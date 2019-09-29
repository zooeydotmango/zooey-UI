import Toast from './toast'
export default {
    install(Vue,options){
        Vue.prototype.$toast=function (message) {
            const constructor = Vue.extend(Toast)
            const toast = new constructor();
            toast.$slots.default = [message]
            toast.$mount();
            document.body.appendChild(toast.$el)
        }
    }
}