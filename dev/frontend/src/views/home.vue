
<script setup>
    import store from '@/store';
    import { uiHeader } from '@/components/ui/'; 
    


</script>

<template>
    <div class="auth" v-if="!store.state.auth.token">
        Authorizing...
    </div>
    <div class="home" v-if="store.state.auth.token">
        <ui-header></ui-header>
        <h1>Home View</h1>
    </div>
</template>

<style lang="less">
    .auth {
        display: flex;
        position: fixed;
        offset: 0;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        color: rgb(@c-blue);
        font-weight: 600;
    }
</style>