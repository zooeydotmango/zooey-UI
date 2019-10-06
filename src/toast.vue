<template>
    <div class="toast">
        <slot></slot>
        <div class="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
        </span>
    </div>
</template>
<script>
    export default {
        name:'zooeyToast',
        props: {
            autoClose:{
                type: Boolean,
                default: true
            },
            autoCloseDelay:{
                type: Number,
                default: 5
            },
            closeButton:{
                type: Object,
                default(){
                    return{
                        text:'关闭',
                        callback:(toast)=>{
                            toast.close()
                        }
                    }
                }
            }
        },
        mounted(){
            if(this.autoClose){
                setTimeout(()=>{
                    this.close()
                }, this.autoCloseDelay*1000)
            }
        },
        methods:{
            close(){
                this.$el.remove()
                this.$destroy()
            },
            onClickClose(){
                this.close()
                if(this.closeButton && typeof this.closeButton.callback === 'function'){
                    this.closeButton.callback()
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    $bg-color:rgba(0,0,0,.75);
    $height:40px;
    $font-size:14px;
    $font-color:#fff;
    .toast{
        font-size: $font-size;
        height: $height;
        background-color: $bg-color;
        box-shadow: 0 0 1px 0 rgba(0,0,0,.75);
        color: $font-color;
        padding: 0 20px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        display: flex;
        align-items: center;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }
    .close{
        padding-left: 16px;        
    }
    .line{
        border-left: 1px solid #666;
        height: 100%;
        margin-left: 16px;
    }
</style>