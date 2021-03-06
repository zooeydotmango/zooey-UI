import Vue from 'vue'
import Button from './button/button'
import Icon from './button/icon'
import ButtonGroup from './button/button-group'
import Input from './input'
import Row from './grid/row'
import Col from './grid/col'
import Content from './layout/content'
import Header from './layout/header'
import Footer from './layout/footer'
import Layout from './layout/layout'
import Sider from './layout/sider'
import Toast from './toast'
import Plugin from './plugin'
import Tabs from './tab/tabs'
import TabsHead from './tab/tabs-head'
import TabsBody from './tab/tabs-body'
import TabsItem from './tab/tabs-item'
import TabsPane from './tab/tabs-pane'
import Popover from './popover'
import Collapse from './collapse/collapse'
import CollapseItem from './collapse/collapse-item'


Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-row', Row);
Vue.component('g-col', Col);
Vue.component('g-layout', Layout);
Vue.component('g-content', Content);
Vue.component('g-header', Header);
Vue.component('g-footer', Footer);
Vue.component('g-sider', Sider);
Vue.component('g-toast', Toast);
Vue.component('g-tabs', Tabs);
Vue.component('g-tabs-head', TabsHead);
Vue.component('g-tabs-body', TabsBody);
Vue.component('g-tabs-item', TabsItem);
Vue.component('g-tabs-pane', TabsPane);
Vue.component('g-popover', Popover);
Vue.component('g-collapse', Collapse);
Vue.component('g-collapse-item', CollapseItem);
Vue.use(Plugin);

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        message: 'hi',
        selectedTab: ['1','2'],
        selected: '1'
        
    },
    methods: {
        onClickButton () {
            this.$toast('你知道我在等你吗？', {
                closeButton: {
                    text: '知道了',
                    callback: () => {
                        console.log('他说知道了')
                    }
                },
                autoClose:false
            })
        }
    }
});

 