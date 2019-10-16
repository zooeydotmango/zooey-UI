<template>
    <div class="collapse">
        <slot></slot>
    </div>

</template>

<script>
    import Vue from 'vue'

    export default {
        name: "zooeyCollapse",
        data() {
            return {
                eventBus: new Vue()
            }
        },
        props: {
            single: {
                type: Boolean,
                default: false
            },
            selected: {
                type: Array
            }
        },
        provide() {
            return {
                eventBus: this.eventBus
            }

        },
        mounted() {
            this.eventBus.$emit('update:selected', this.selected)

            this.eventBus.$on('update:addSelected', (name) => {
                let selected = JSON.parse(JSON.stringify(this.selected))

                if (this.single){
                    selected = [name]
                } else{
                    selected.push(name)
                }
                    this.$emit('update:selected', selected)
                    this.eventBus.$emit('update:selected', selected)
                
            })
            this.eventBus.$on('update:removeSelected', (name) => {
                let selected = JSON.parse(JSON.stringify(this.selected))

                let index = selected.indexOf(name)
                selected.splice(index, 1);
                this.$emit('update:selected', selected)
                this.eventBus.$emit('update:selected', selected)

            })
            
        }
    }
</script>

<style scoped lang="scss">
    $grey: #ddd;
    $border-radius: 4px;
    .collapse {
        border: 1px solid $grey;
        border-radius: $border-radius;
    }
</style>