<template>
    <div class="toast" ref="wrap">
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
        </span>
    </div>
</template>
<script>
    export default {
        name: 'zooeyToast',
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDelay: {
                type: Number,
                default: 5
            },
            closeButton: {
                type: Object,
                default() {
                    return {
                        text: '关闭',
                        callback: (toast) => {
                            toast.close()
                        }
                    }
                }
            },
            enableHtml: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
            this.updateStyles();
            this.execAutoClose()
        },
        methods: {
            execAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoCloseDelay * 1000)
                }
            },
            updateStyles() {
                this.$nextTick(() => {
                    this.$refs.line.style.height =
                        `${this.$refs.wrap.getBoundingClientRect().height}px`
                })
            },
            close() {
                this.$el.remove();
                this.$destroy()
            },
            onClickClose() {
                this.close();
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback(this)
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    $bg-color: rgba(0, 0, 0, .75);
    $toast-min-height: 40px;
    $font-size: 14px;
    $font-color: #fff;
    .toast {
        font-size: $font-size;
        min-height: $toast-min-height;
        background-color: $bg-color;
        box-shadow: 0 0 1px 0 rgba(0, 0, 0, .75);
        color: $font-color;
        padding: 0 20px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }

    .close {
        padding-left: 16px;
    }
    
    .line {
        border-left: 1px solid #666;
        height: 100%;
        margin-left: 16px;
    }
    .message{
        padding: 4px 0;
    }
</style>