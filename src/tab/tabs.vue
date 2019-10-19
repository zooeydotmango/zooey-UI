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
        methods: {
            checkChildren() {
                if (this.$children.length === 0) {
                    console && console.warn
                    && console.warn('tabs的子组件应该是tabs-head和tab-body，但是你写子组件')
                }
            }
        },
        mounted() {
            this.checkChildren();
            this.$children.forEach((vm) => {
                if (vm.$options.name === 'zooeyTabs-header') {
                    vm.$children.forEach((item) => {
                        if (item.$options.name === 'zooeyTabs-item'
                            && item.name === this.selected) {
                            this.eventBus.$emit('update:selected', this.selected, item)
                        }
                    })
                }
            })
        }
        ,
        provide() {
            return {
                eventBus: this.eventBus
            }
        }
    }
</script>
<style lang="scss" scoped>
    .tabs {

    }
</style>