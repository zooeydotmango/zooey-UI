<template>
    <div>
        <g-collapse single :selected.sync="selectedTab">
            <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
            <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
            <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
            {{selectedTab}}
        </g-collapse>
    </div>
    
</template>
<script>
    import Collapse from '../../../src/collapse/collapse'
    import CollapseItem from '../../../src/collapse/collapse-item'
    import vue from 'vue'

    export default {
        components: {
            Collapse,
            CollapseItem
        },
        data() {
            return {
                selectedTab: ['1','2'],
                content: `
                <g-collapse single :selected.sync="selectedTab">
        <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
        <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
        <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
        {{selectedTab}}
    </g-collapse>
                `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>