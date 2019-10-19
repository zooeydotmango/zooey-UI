<template>
    <div class="wrapper" :class="toastClasses">
        <div class="toast" ref="toast">
            <div class="message">
                <slot v-if="!enableHtml"></slot>
                <div v-else v-html="$slots.default[0]"></div>
            </div>
            <div class="line" ref="line"></div>
            <span class="close" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
            </span>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'zooeyToast',
        props: {
            autoClose: {
                type: [Boolean, Number],
                default: 2,
                validator(value){
                    return value === true || typeof value === 'number'
                }
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
            },
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'middle'].indexOf(value) >= 0
                }
            }
        },
        mounted() {
            this.updateStyles();
            this.execAutoClose()
        },
        computed: {
            toastClasses() {
                return {
                    [`position-${this.position}`]: true
                }
            }
        },
        methods: {
            execAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoClose * 1000)
                }
            },
            updateStyles() {
                this.$nextTick(() => {
                    this.$refs.line.style.height =
                        `${this.$refs.toast.getBoundingClientRect().height}px`
                })
            },
            close() {
                this.$el.remove();
                this.$emit('close');
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
    $animation-duration: 1s;
    @keyframes slide-up {
        0% {
            opacity: 0;
            transform: translateY(100%)
        }
        100% {
            opacity: 1;
            transform: translateY(0%)
        }
    }

    @keyframes slide-down {
        0% {
            opacity: 0;
            transform: translateY(-100%)
        }
        100% {
            opacity: 1;
            transform: translateY(0%)
        }
    }

    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .wrapper {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        &.position-top {
            top: 0;
            .toast {
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                animation: slide-down $animation-duration;
            }
        }
        &.position-bottom {
            bottom: 0;
            .toast {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                animation: slide-up $animation-duration;
            }
        }
        &.position-middle {
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
            .toast {
                animation: fade-in $animation-duration;
            }
        }
    }

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

        .close {
            padding-left: 16px;
        }

        .line {
            border-left: 1px solid #666;
            height: 100%;
            margin-left: 16px;
        }
        .message {
            padding: 4px 0;
        }

    }
</style>