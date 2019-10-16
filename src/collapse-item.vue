<template>
    <div class="collapseItem">
        <div class="title" @click="toggle">
            {{title}}
        </div>
        <div class="content" v-show="visible">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "zooeyCollapseItem",
        inject: ['eventBus'],
        props: {
            title: {
                type: String,
                required: true
            },
            name:{
                type:String,
                required:true
            }
        },
        data() {
            return {
                visible: false
            }
        },
        mounted() {
            this.eventBus && this.eventBus.$on('update:selected', (name) => {
                if (name !== this.name) {
                    this.close();
                }else{
                    this.open()
                }
            })
        },
        methods: {
            toggle() {
                if (this.visible) {
                    this.close()
                } else {
                    this.eventBus && this.eventBus.$emit('update:selected', this.name)
                }
            },
            close() {
                this.visible = false;
            },
            open(){
                this.visible = true;
            }
        }
    }
</script>

<style scoped lang="scss">
    $grey: #ddd;
    $border-radius: 4px;
    .collapseItem {
        > .title {
            border: 1px solid $grey;
            margin-top: -1px;
            margin-left: -1px;
            margin-right: -1px;
            min-height: 32px;
            display: flex;
            align-items: center;
            padding: 0 8px;
        }
        &:first-child {
            > .title {
                border-top-right-radius: $border-radius;
                border-top-left-radius: $border-radius;
            }
        }
        &:last-child {
            > .title:last-child {
                border-bottom-right-radius: $border-radius;
                border-bottom-left-radius: $border-radius;
            }
        }
        > .content {
            padding: 8px;
        }

    }
</style>