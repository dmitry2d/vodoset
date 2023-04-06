<script setup>
    import uiLogo from '@/components/ui/logo.vue';
    import uiBox from '@/components/ui/box.vue';
</script>

<template>
    <div class="login flex column center fullscreen">
        <ui-logo></ui-logo>
        <ui-box>
            login view
            <input type="text">
        </ui-box>
    </div>
</template>

<style lang="less" scoped>
    .login {
        .logo {
            width: 80rem;
            margin-top: -200rem;
            margin-bottom: 20rem;
        }
    }
</style>