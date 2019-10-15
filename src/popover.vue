<template>
    <div class="popover" @click="onclick" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper" style="display: inline-block">
            <slot></slot>    
        </span>
    </div>
</template>

<script>
    export default {
        name: "zooeyPopover",
        data() {
            return {
                visible: false
            }
        },
        methods: {
            positionContent() {
                document.body.appendChild(this.$refs.contentWrapper)
                let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect();
                this.$refs.contentWrapper.style.left = `${left + window.scrollX}px`;
                this.$refs.contentWrapper.style.top = `${top + window.scrollY}px`;
            },
            onClickDocument(e) {
                if (this.$refs.popover
                    && (this.$refs.popover.contains(e.target) || this.$refs.contentWrapper === e.target)) {
                    return;
                }
                this.close();
            },
            open() {
                this.visible = true;
                this.$nextTick(() => {
                    this.positionContent();
                    document.addEventListener('click', this.onClickDocument)
                })
            },
            close() {
                this.visible = false;
                document.removeEventListener('click', this.onClickDocument)
            },
            onclick(event) {
                if (this.$refs.triggerWrapper.contains(event.target)) {
                    if (this.visible === true) {
                        this.close();
                    } else {
                        this.open();
                    }
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    $border-color: #333;
    $border-radius: 4px;
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
    }

    .content-wrapper {
        position: absolute;
        /*box-shadow: 0 0 3px rgba(0, 0, 0, .55);*/
        transform: translateY(-100%);
        margin-top: -10px;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        padding: .5em 1em;
        max-width: 20em;
        filter: drop-shadow(0 1px 1px rgba(0,0,0,.5));
        background: white;
        &::before,&::after{
            content: '';
            display: block;
            border: 10px solid transparent;
            position: absolute;
            left: 10px;
        }
        &::before{
            border-top-color: black;
            top: 100%;
        }
        &::after{
            border-top-color: white;
            top: calc(100% - 1px);
        }
    }

</style>