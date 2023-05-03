<script setup>
  import store from '@/store'
  import { uiHeader } from '@/components/ui/';
</script>
<template>
  <ui-header
    v-if="store.session.state.token">
  </ui-header>
  <router-view/>
</template>
<style lang="less" scoped>
</style>

