<script setup>
    import { computed, setBlockTracking } from 'vue';
    import uiIcon from './icon.vue';


    const props = defineProps({
        icon: {
            type: String,
            default: null
        },
        style: {
            type: String,
            default: 'default'
        },
        color_prefix: {
            type: String,
            default: '--c-'
        }
    })

    const styles = {
        default: {
            color: 'white',
            background: 'blue'
        },
        stroke_blue: {
            color: 'blue',
            stroke: 'blue'
        }
    }

    const style_ = computed (() => {
        const style = styles[props.style] || styles['default'];
        const result = {};
        if (style.color) {
            result.color = `rgb(var(${props.color_prefix + style.color}))`
        }
        if (style.background) {
            result['background-color'] = `rgb(var(${props.color_prefix + style.background}))`
        }
        if (style.stroke) {
            result['border-color'] = `rgb(var(${props.color_prefix + style.stroke}))`
        }
        return result;
    });
    

</script>

<template>
    <div
        class="button"
        :style="[style_]"
    >
        <ui-icon
            v-if="props.icon"
            :name="props.icon"
            :color="style_.color"
        ></ui-icon>
        <div
            class="content"
        ><slot></slot></div>
    </div>
</template>



<style lang="less" scoped>
    .button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 8rem 17rem;
        
        border: 2rem solid #ffffff00;
        border-radius: 13rem;
        font-size: 16rem;

        .icon {
            width: 28rem;
            height: 28rem;
            margin-right: 10rem;
        }

        cursor: pointer;
        margin: 16rem auto;
        
        .content {
            top: 0;
            transition: top 0.2s;
        }
        &:hover .content {
            top: -1rem;
        }

    }
</style>