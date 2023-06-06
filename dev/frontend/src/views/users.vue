<script setup>

    import { ref, reactive, onMounted, computed, watchEffect } from 'vue'
    import { uiBox, uiMenu, uiTable } from '@/components/ui/';
    import store from '@/store';
    import api from '@/api';

    const tableColumns = [
        {
            key: 'name',
            title: 'Имя',
            type: 'text'
        },
        {
            key: 'surname',
            title: 'Отчество',
            type: 'text'
        },
        {
            key: 'lastname',
            title: 'Фамилия',
            type: 'text'
        },
        {
            key: 'username',
            title: 'Логин',
            type: 'text'
        },
        {
            key: 'role',
            title: 'Роль',
            type: 'text'
        },
        {
            key: 'pos',
            title: 'Должность',
            type: 'text'
        },
        {
            key: 'dept',
            title: 'Отдел',
            type: 'text'
        },
    ]

    const tableSort = reactive({
        key: 'name',
        dir: -1
    });

    const tableNav = reactive ({
        page: 0,
        limit: 2,
        pages: 0
    });

    const tableData = ref([]);

    watchEffect (async () => {
        const result = await (api.getUsers (store.session.state.token.JWTString, {
            page: tableNav.page,
            limit: tableNav.limit
        }));
        tableNav.pages = Math.ceil((result.count || 0) / tableNav.limit);
        tableData.value = (result.rows || []).map(({id, username, role, details}) => {
            return {id, username, role, ...details}
        });
    });

</script>

<template>
    <div class="users flex">
        <ui-menu></ui-menu>
        <div class="container">
            <h1>Пользователи</h1>
            <ui-box class="tableBox">
                <ui-table
                    :rows="tableData"
                    :columns="tableColumns"
                    :pages="tableNav.pages"
                    v-model:page="tableNav.page"
                ></ui-table>
            </ui-box>
        </div>
    </div>
</template>

<style lang="less" scoped>
    :deep(.box) {
        width: 100%;
    }
</style>