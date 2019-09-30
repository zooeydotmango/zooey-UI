import Toast from './toast'

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message) {
            const constructor = Vue.extend(Toast)
            const toast = new constructor({
                    propsData:{
                        closeButton:{
                            text:'知道了',
                            callback(){
                                console.log('用户说他知道了')
                            }
                        }
                    }
                }
            );
            toast.$slots.default = [message]
            toast.$mount();
            document.body.appendChild(toast.$el)
        }
    }
}