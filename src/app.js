import Vue from 'vue'
import Button from './button'
import Icon from  './icon'
import ButtonGroup from './button-group'

Vue.component('g-button',Button);
Vue.component('g-icon',Icon);
Vue.component('g-button-group',ButtonGroup);
new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:false,
        loading3:false
    }
});

//单元测试
import chai from 'chai'
import spies from 'chai-spies'
const expect = chai.expect;
chai.use(spies);
{
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData: {
            icon: 'settings'
        }
    });
    button.$mount();
    let useElement = button.$el.querySelector('use');
    console.log(useElement);
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-settings');
    button.$el.remove();
    button.$destroy()
}
{
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData: {
            icon: 'settings',
            loading:true
        }
    });
    button.$mount();
    let useElement = button.$el.querySelector('use');
    console.log(useElement);
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading');
    button.$el.remove();
    button.$destroy()
}
{
    const div=document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition:'right'
        }
    });
    button.$mount(div);
    let svg = button.$el.querySelector('svg');
    let order = window.getComputedStyle(svg).order;
    expect(order).to.eq(`2`);
    button.$el.remove();
    button.$destroy()
}
{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    });
    vm.$mount();
    let spy = chai.spy(function () {});
    vm.$on('click',spy);
    let button = vm.$el;;
    button.click();
    expect(spy).to.have.been.called();
    vm.$el.remove();
    vm.$destroy()
}