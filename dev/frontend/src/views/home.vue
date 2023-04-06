
<script setup>
import { ref } from 'vue';
    import store from '@/store';
    import router from '@/router';
    
    (async ()=> {
        await store.session.auth.check();
        if (!store.state.auth.token) {
            // router.replace('/login');
        }
    })();

</script>

<template>
    <div class="auth" v-if="!store.state.auth.token">
        Authorizing...
    </div>
    <div class="home" v-if="store.state.auth.token">
        Welcome home, {{ store.state.auth.username }}!
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