<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:'zooeyToast'
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
</style>