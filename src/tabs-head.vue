<template>
    <div class="tabs-header">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>    
        </div>
    </div>
</template>
<script>
    export default {
        name: 'zooeyTabs-header',
        inject:['eventBus'],
        created(){
            this.eventBus.$on('update:selected',(item, vm)=>{
                console.log(vm);
            })
        }
    }
</script>
<style lang="scss" scoped>
    $tab-height:50px;
    $blue: blue;
    .tabs-header{
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        position: relative;
        > .actions-wrapper{
            margin-left: auto;
        }
        > .line{
            position: absolute;
            bottom: 0;
            border-bottom: 1px solid $blue;
            width: 100px;
        }
    }
</style>