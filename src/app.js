import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Content from './content'
import Header from './header'
import Footer from './footer'
import Layout from './layout'
import Sider from './sider'
import Toast from './toast'
import Plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'


Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-content', Content)
Vue.component('g-header', Header)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)
Vue.component('g-toast', Toast)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover', Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)
Vue.use(Plugin)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        message: 'hi',
        selectedTab: 'sports'
        
    },
    methods: {
        showToast1(){
            this.showToast('top')
        },
        showToast2(){
            this.showToast('middle')
        },
        showToast3(){
            this.showToast('bottom')
        },
        showToast(position) {
            this.$toast('<strong>这个button</strong>', {
                position,
                autoClose:2,
                closeButton: {
                    text: '知道了',
                    callback() {
                        console.log('用户说他知道了')
                    }
                },
                enableHtml: true
            })
        }
    }
});

 