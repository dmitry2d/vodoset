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
        border-radius: 20rem;
        box-shadow: 0 22rem 32rem rgba(@c-blue,0.07);
        padding: 40rem 30rem;
        width: fit-content;
        transition: box-shadow 0.3s ease-in-out;
        &:hover,
        &:focus-within {
            box-shadow: 0 36rem 32rem rgba(@c-blue,0.12);
        }
    }
</style>