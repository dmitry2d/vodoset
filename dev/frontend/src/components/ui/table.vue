

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
    defineProps ({
        data: {
            type: Array,
            default: []
        }
    })
</script>

<template>
    <div>
        {{ data }}
    </div>
</template>


<style lang="less" scoped>

</style>