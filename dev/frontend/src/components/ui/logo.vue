
<!--
    Use
    <ui-logo
        :type='vertical|horizontal'
        :notext='true|'
    >
        Content here
    </ui-logo>
-->

<template>
    <div :class="['logo', `${type}`]">
        <div class="image">
            <img v-if="notext" src="/logo__notext.svg">
            <img v-if="!notext" src="/logo.svg">
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        type: {
            type: String,
            default: 'vertical'
        },
        notext: Boolean
    })
</script>

<style lang="less" scoped>
    .logo {
        display: flex;
        &.vertical {
            flex-direction: column;
            align-items: center;
        }
        .image {
            width: 80rem;
            img {
                width: 100%;
            }
        }
        h1 {
            margin: 0;
        }
    }
</style>