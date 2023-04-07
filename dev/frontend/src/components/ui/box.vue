<script setup>
    const props = defineProps ({
        color: {
            type: String,
            default: 'white'
        }
    })
</script>

<template>
    <div
        class="box"
        :style="{
            'background-color': `rgb(var(--c-${color}))`
        }"
    >
        <slot></slot>
    </div>
</template>

<style lang="less" scoped>
    .box {
        padding: 20rem 40rem;
        width: fit-content;

        border-radius: 20rem;
        box-shadow: 0 22rem 32rem rgba(@c-blue,0.07);
        transition: box-shadow 0.3s ease-in-out;
        
        &:hover,
        &:focus-within {
            box-shadow: 0 36rem 32rem rgba(@c-blue,0.12);
        }
    }
</style>