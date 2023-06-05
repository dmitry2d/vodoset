<script setup>

    import { ref, reactive, onMounted } from 'vue'

    import { uiBox, uiMenu, uiTable } from '@/components/ui/';


    const tableData = ref([
        {
            name: 'Дмитрий',
            role: 'ADMIN',
            pos: '',
            dept: ''
        }
    ]);

    const tableColumns = [
        {
            key: 'name',
            title: 'Имя',
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
    })

    // const usersTable = ref(null);
    // onMounted (() => {
    //     console.log (usersTable.value.a)
    // })

    

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
                    :pages="10"
                    :page="0"
                    :sort="tableSort"
                    ref="usersTable"
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