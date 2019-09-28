<template>
    <div class="col" :class="[span && `col-${span} `, offset &&`offset-${offset}`]" 
    :style="{paddingLeft: gutter/2+'px',paddingRight: gutter/2+'px'}">
        <div style="border:1px solid green; height: 100px;">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'zooeyCol',
        props: {
            span: {
                type:[Number,String]
            },
            offset:{
                type:[Number,String]
            }
        },
        data(){
            return{
                gutter:0
            }
        }
    }
</script>
<style lang="scss" scoped>
    .col{
        width: 50%;
        height: 100px;
        /*background: gray;*/
        border: 1px solid red;
        margin: 0 ;
        $class-col: col-;
        $class-offset: offset-;
        @for $n from 1 through 24 {
            &.#{$class-col}#{$n}{
                width: ($n / 24)*100%;
            }
        }
        @for $n from 1 through 24 {
            &.#{$class-offset}#{$n}{
                margin-left: ($n / 24)*100%;
            }
        }
    }
</style>