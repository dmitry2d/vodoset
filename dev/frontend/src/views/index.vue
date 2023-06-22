<script setup>

    import { ref, reactive, onMounted, computed, watchEffect } from 'vue'
    import { uiBox, uiMenu, uiTable } from '@/components/ui/';
    import store from '@/store';
    import api from '@/api';


</script>

<template>
    <div class="users flex">
        <ui-menu></ui-menu>
        <div class="container">
            <h1>Справочники</h1>
        </div>
    </div>
</template>

<style lang="less" scoped>
    :deep(.box) {
        width: 100%;
    }
</style>