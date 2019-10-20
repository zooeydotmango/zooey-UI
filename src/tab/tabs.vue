<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<script>
    import Vue from 'vue'

    export default {
        name: 'zooeyTabs',
        props: {
            selected: {
                type: String,
                required: true
            },
            direction: {
                type: String,
                default: 'horizontal',
                validator(value) {
                    return ['horizontal', 'vertical'].indexOf(value) >= 0
                }
            }
        },
        data() {
            return {
                eventBus: new Vue()
            }
        },
        provide() {
            return {
                eventBus: this.eventBus
            }
        },
        methods: {
            checkChildren() {
                if (this.$children.length === 0) {
                    console && console.warn
                    && console.warn('tabs的子组件应该是tabs-head和tab-body，但是你写子组件')
                }
            },
            selectTab(){
                this.$children.forEach((vm) => {
                    if (vm.$options.name === 'zooeyTabs-header') {
                        vm.$children.forEach((childVm) => {
                            if (childVm.$options.name === 'zooeyTabs-item'
                                && childVm.name === this.selected) {
                                this.eventBus.$emit('update:selected', this.selected, childVm)
                            }
                        })
                    }
                })
            }
        },
        mounted() {
            this.checkChildren();
            this.selectTab();
        }
    }
</script>
<style lang="scss" scoped>
    .tabs {

    }
</style>