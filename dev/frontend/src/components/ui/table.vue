


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
    defineProps ({
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
        pages: 0,
        page: 0
    })

    const emits = defineEmits (['update:selected']);

    const a = 123;

    defineExpose({a})

</script>

<template>
    {{ rows }}
    <div class="table">
        <!-- {{ columns }} -->
        <div class="header">
            <div class="td" v-for="(column, columnIndex) in columns">{{ column.title }}</div>
        </div>
        <div class="tr" v-for="(row, rowIndex) in rows">
            <div class="td" v-for="(column, columnIndex) in columns">{{ row[column.key] }}</div>
        </div>
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