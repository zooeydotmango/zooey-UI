<template>
    <div class="tabs-header">
        <slot></slot>
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
        }
    }
</script>
<style lang="scss" scoped>
    $tab-height:30px;
    .tabs-header{
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        > .actions-wrapper{
            margin-left: auto;
        }
        
    }
</style>