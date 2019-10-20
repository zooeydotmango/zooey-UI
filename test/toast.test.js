const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.exist
    });
    
    describe('props', function () {
        it('接受 autoClose', function (done) {
            let div = document.createElement('div');
            document.body.appendChild(div);
            const Constructor = Vue.extend(Toast);
            const vm = new Constructor({
                propsData: {
                    autoClose: 1,
                }
            }).$mount(div);
            vm.$on('close',()=>{
                expect(document.body.contains(vm.$el)).to.eq(false);
                done()
            });
        });
        it('接受 closeButton', function (done) {
            const Constructor = Vue.extend(Toast);
            let callback=sinon.fake()
            const vm = new Constructor({
                propsData: {
                    closeButton: {
                        text: '关闭button',
                        callback
                    }
                }
            }).$mount();
            let closeButton=vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.eq('关闭button')
            setTimeout(()=>{
                closeButton.click()
                expect(callback).to.have.been.called
                done()
            },200)
        });

        it('接受 enableHtml', function () {
            const Constructor = Vue.extend(Toast);
            const vm = new Constructor({
                propsData:{
                    enableHtml:true
                }
            });
            vm.$slots.default = ['<strong id="test">enableHtml</strong>']
            vm.$mount()
            let strong =vm.$el.querySelector('#test')
            expect(strong).to.exist
        });

        it('接受 position', function () {
            const Constructor = Vue.extend(Toast);
            const vm = new Constructor({
                propsData:{
                    position:'bottom'
                }
            }).$mount()
            expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
        });
    })
});