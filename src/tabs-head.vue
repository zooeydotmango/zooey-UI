<template>
    <div class="tabs-header">
        <slot></slot>
        <slot name="actions"></slot>
    </div>
</template>
<script>
    export default {
        name: 'zooeyTabs-header'
    }
</script>
<style lang="scss" scoped> 
    .tabs-header{
        
    }
</style>