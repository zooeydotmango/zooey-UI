import Vue from 'vue'
import Button from './button'
import Icon from  './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Content from './content'
import Header from './header'
import Footer from './footer'
import Layout from './layout'
import Sider from './sider'


Vue.component('g-button',Button);
Vue.component('g-icon',Icon);
Vue.component('g-button-group',ButtonGroup);
Vue.component('g-input', Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-layout',Layout)
Vue.component('g-content',Content)
Vue.component('g-header',Header)
Vue.component('g-footer',Footer)
Vue.component('g-sider',Sider)

new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:false,
        loading3:false,
        message: 'hi'
    },
    created(){
        
    },
    methods:{
        changeInput(e){
            console.log(e);
        }
    }
});

 