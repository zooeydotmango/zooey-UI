<template>
    <div class="col" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>
<script>
    let validator = (value) => {
        let keys = Object.keys(value)
        let valid = true
        keys.forEach(key => {
            if (!['span', 'offset'].includes(key)) {
                valid = false
            }
        })
        return valid
    }
    export default {
        name: 'zooeyCol',
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            },
            pad: {type: Object, validator,},
            narrowPc: {type: Object, validator,},
            pc: {type: Object, validator,},
            widePc: {type: Object, validator,},
        },
        data() {
            return {
                gutter: 0
            }
        },
        methods:{
            createClass(obj, str=''){
                if(!obj)return []
                let array=[]
                if(obj.span){
                    array.push(`col-${str}${obj.span}`)
                }
                if(obj.offset){
                    array.push(`offset-${str}${obj.offset}`)
                }
                return array
            }
        },
        computed: {
            colStyle() {
                return {
                    paddingLeft: this.gutter / 2 + 'px',
                    paddingRight: this.gutter / 2 + 'px'
                }
            },
            colClass() {
                let {span, offset, pad, narrowPc, pc, widePc} = this
                let createClass=this.createClass
                return [
                    ...createClass({span,offset}),
                    ...createClass(pad,'pad-'),
                    ...createClass(narrowPc,'narrow-pc-'),
                    ...createClass(pc,'pc-'),
                    ...createClass(widePc,'wide-pc-')
                ]
            }
        }
    }
</script>
<style lang="scss" scoped>
    .col {
        $class-col: col-;
        $class-offset: offset-;
        @for $n from 1 through 24 {
            &.#{$class-col}#{$n} {
                width: ($n / 24)*100%;
            }
        }
        @for $n from 1 through 24 {
            &.#{$class-offset}#{$n} {
                margin-left: ($n / 24)*100%;
            }
        }
    }

    @media (min-width: 577px) {
        .col {
            $class-col: col-pad-;
            $class-offset: offset-pad-;
            @for $n from 1 through 24 {
                &.#{$class-col}#{$n} {
                    width: ($n / 24)*100%;
                }
            }
            @for $n from 1 through 24 {
                &.#{$class-offset}#{$n} {
                    margin-left: ($n / 24)*100%;
                }
            }
        }
    }

    @media (min-width: 769px){
        .col {
            $class-col: col-narrow-pc-;
            $class-offset: offset-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-col}#{$n} {
                    width: ($n / 24)*100%;
                }
            }
            @for $n from 1 through 24 {
                &.#{$class-offset}#{$n} {
                    margin-left: ($n / 24)*100%;
                }
            }
        }
    }

    @media (min-width: 993px){
        .col {
            $class-col: col-pc-;
            $class-offset: offset-pc-;
            @for $n from 1 through 24 {
                &.#{$class-col}#{$n} {
                    width: ($n / 24)*100%;
                }
            }
            @for $n from 1 through 24 {
                &.#{$class-offset}#{$n} {
                    margin-left: ($n / 24)*100%;
                }
            }
        }
    }

    @media (min-width: 1201px) {
        .col {
            $class-col: col-wide-pc-;
            $class-offset: offset-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-col}#{$n} {
                    width: ($n / 24)*100%;
                }
            }
            @for $n from 1 through 24 {
                &.#{$class-offset}#{$n} {
                    margin-left: ($n / 24)*100%;
                }
            }
        }
    }


</style>