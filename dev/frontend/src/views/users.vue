<script setup>

    import { uiMenu, uiTable } from '@/components/ui/';

    const usersData = [];

    

</script>

<template>
    <div class="users flex">
        <ui-menu></ui-menu>
        <div class="container">
            <h1>Пользователи</h1>
            <ui-table
                :data="usersData"
            ></ui-table>

        </div>
    </div>
</template>

<style lang="less">
</style>