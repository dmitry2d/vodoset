<script setup>
  import router from '@/router'
  import { computed } from 'vue'
  import { uiHeader } from '@/components/ui/'

  const showHeader = computed (() => {
    return !router.currentRoute.value.meta?.noHeader
  })

</script>
<template>
  <ui-header v-if="showHeader"/>
  <router-view/>
</template>
<style lang="less" scoped>
</style>

