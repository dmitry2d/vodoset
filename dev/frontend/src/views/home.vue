
<script setup>
    import store from '@/store';
    import router from '@/router';
    
    (async ()=> {

        if (!await store.session.auth.check ()) {
            router.replace('/login');
        };

    })();

    const logout = function () {
        store.session.auth.logout();
        router.go();
    }

</script>

<template>
    <div class="auth" v-if="!store.state.auth.token">
        Authorizing...
    </div>
    <div class="home" v-if="store.state.auth.token">
        Welcome home, {{store.state.auth.token?.username}}!
        <div @click="logout">Logout</div>
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