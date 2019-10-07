import Toast from './toast'



let currentToast

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, toastOptions) {
            if(currentToast){
                currentToast.close()
            }
            currentToast =createToast({Vue,message,propsData:toastOptions})
        }
    }
}

// helpers
function createToast({Vue,message,propsData}) {
    const constructor = Vue.extend(Toast);
    const toast = new constructor({propsData});
    toast.$slots.default = [message];
    toast.$mount();
    document.body.appendChild(toast.$el)
    return toast
}