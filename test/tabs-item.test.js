const expect = chai.expect;
import Vue from 'vue'
import TabsItem from '../src/tabs-item'



Vue.config.productionTip = false;
Vue.config.devtools = false;


describe('TabsItem', () => {
    it('存在.', () => {
        expect(TabsItem).to.exist
    });

    it('接受 name 属性', function () {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                name: '123'
            }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.eq('123')
    });

    it('接受 disabled 属性', function () {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()
        expect(vm.$el.classList.contains('disabled')).to.be.true
        const callback=sinon.fake();
        vm.$on('click', callback)
        vm.$el.click();
        expect(callback).to.have.not.been.called
    });

});