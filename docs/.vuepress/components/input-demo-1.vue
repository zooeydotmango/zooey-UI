<template>
    <div style="padding-top: 16px;">
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <g-input value="正常"></g-input>
        <g-input value="禁用" disabled></g-input>
        <g-input value="只读" readonly></g-input>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import GInput from '../../../src/input'

    export default {
        components: {
            'g-input':GInput
        },
        data () {
            return {
                selected: '1',
                content: `
        <g-input></g-input>
        <g-input value="正常"></g-input>
        <g-input value="禁用" disabled></g-input>
        <g-input value="只读" readonly></g-input>
        `.replace(/^ {4}/gm, '').trim()
            }
        }
    }
</script>