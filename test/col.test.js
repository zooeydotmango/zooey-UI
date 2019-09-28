const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    it('存在.', () => {
        expect(Col).to.exist
    })

    it('接受 span 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                span: '11'
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-11')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    
    it('接受 offset 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                offset: '12'
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('offset-12')).to.equal(true)
        div.remove()
        vm.$destroy()
    })

    it('接受 pad 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                pad: {span:1,offset:2}
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-pad-1')).to.equal(true)
        expect(element.classList.contains('offset-pad-2')).to.equal(true)
        div.remove()
        vm.$destroy()
    })

    it('接受 narrowPc 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                narrowPc: {span:11,offset:22}
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-narrow-pc-11')).to.equal(true)
        expect(element.classList.contains('offset-narrow-pc-22')).to.equal(true)
        div.remove()
        vm.$destroy()
    })

    it('接受 pc 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                pc: {span:1,offset:12}
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-pc-1')).to.equal(true)
        expect(element.classList.contains('offset-pc-12')).to.equal(true)
        div.remove()
        vm.$destroy()
    })

    it('接受 widePc 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                widePc: {span:11,offset:22}
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-wide-pc-11')).to.equal(true)
        expect(element.classList.contains('offset-wide-pc-22')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
})