<template>
    <div class="icon">
        <svg width="100%" height="100%" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g v-html="html"></g>
        </svg>
    </div>
</template>

<script setup>
    import { computed } from 'vue';
    import iconData from './icons/index.js';

    const props = defineProps({
        name: {
            type: String,
            required: true 
        },
        color: {
            type: String,
            default: 'white'
        }
    });
    const color_ =  computed (() => {
        return ('rgb(var(--c-' + props.color + '))')
    });
    const html = computed(()=> {
        return iconData[props.name]
            .replace(/(.*)(stroke=")(.*?[^"])(")(.*)/gm, `$1$2${color_.value}$4$5`)
            .replace(/(.*)(fill=")(.*?[^"])(")(.*)/gm, `$1$2${color_.value}$4$5`);
    });

</script>

<style lang="less" scoped>
    .icon {
        width: 28rem;
        height: 28rem;
    }
</style>