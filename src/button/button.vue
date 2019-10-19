<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}"
        @click="$emit('click')">
        <g-icon v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon v-if="loading" name="loading" class="loading icon"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    import Icon from './icon'
    export default {
        name:'zooeyButton',
        components:{
            'g-icon': Icon
        },
        props: {
            icon: {},
            loading:{
                type: Boolean,
                default:false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator: function (value) {
                    return value === 'left' || value === 'right';
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    $button-height: 32px;
    $font-size: 14px;
    $border-radius: 4px;
    $button-active-bg: #eee;
    $button-bg: #fff;
    $border-color: #999;
    $border-color-hover: #666;
    @keyframes spin {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    .g-button {
        font-size: $font-size;
        height: $button-height;
        padding: 0 1em;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        background: $button-bg;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        cursor: pointer;
        &:hover {
            border: 1px solid $border-color-hover;
        }
        &:active {
            background-color: $button-active-bg;
        }
        &:focus {
            outline: none;
        }
        > .icon {
            order: 1;
            margin-right: .1em;
            margin-left: 0;
        }
        > .content {
            order: 2;
        }
        &.icon-right {
            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: .1em;
            }
            > .content {
                order: 1;
            }
        }
        .loading {
            animation: spin 1s infinite linear;
        }
    }
</style>