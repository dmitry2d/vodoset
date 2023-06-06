


<!-- 
    Data Table Component
-->

<!-- 

Title

Page navigation

Rows on page Input

Title Row

Title Cell Sorting

Title Cell Search

Cell Type
- Text
- Input
- Select

Select All \ None \ Row

Actions (Select box)

-->

<script setup>

import { onMounted, watchEffect } from 'vue';


    /*
        columns: Array (column)

        column: {
            key: String,
            title: String,
            type: String (text | select | input)
            searchable: false,
        }

        rows: Array

        actions: Array (action)

        action: {
            name: String,
            icon: String,
            hint: String
        }

        pages: Number

        page: Number

        sort: {
            key: String,
            dir: -1 | 1
        }
         
    */
    const props = defineProps ({
        columns: {
            type: Array,
            default: []
        },
        rows: {
            type: Array,
            default: []
        },
        actions: {
            type: Array,
            default: []
        },
        pages: Number,
        page: Number
    })

    const emits = defineEmits (['update:page']);

    // const a = 123;

    // defineExpose({a})

    watchEffect (() => {
        console.log (props.rows)
    });

    const back = () => {
        if (props.page > 0) {
            emits('update:page', props.page - 1)
        }
    }
    const forward = () => {
        if (props.page < props.pages - 1) {
            emits('update:page', props.page + 1)
        }
    }

</script>

<template>
    <div class="table">
        <div class="header">
            <div class="td" v-for="(column, columnIndex) in columns">{{ column.title }}</div>
        </div>
        <div class="tr" v-for="(row, rowIndex) in rows">
            <div class="td" v-for="(column, columnIndex) in columns">{{ row[column.key] }}</div>
        </div>
    </div>
    <div class="navy">
        <div class="back" @click.stop="back">BACK</div>
        <div class="page">{{ page + 1 }}</div>
        <div class="pages"> of {{ pages }}</div>
        <div class="forward" @click.stop="forward">FORWARD</div>
    </div>
</template>


<style lang="less" scoped>
    .trow {
        display: table-row;
    }
    .tcell {
        display: table-cell;
    }
    .table {
        display: table;
        width: 100%;
    }
    .header {
        .trow;
        .td {
           .tcell; 
        }
    }
    .tr {
        .trow;
        .td {
            .tcell;
        }
    }
</style>