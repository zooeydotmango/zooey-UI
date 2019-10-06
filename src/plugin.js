import Toast from './toast'

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message,toastOptions) {
            const constructor = Vue.extend(Toast)
            const toast = new constructor({
                propsData:{
                    closeButton: toastOptions.closeButton
                }
            });
            toast.$slots.default = [message]
            toast.$mount();
            document.body.appendChild(toast.$el)
        }
    }
}