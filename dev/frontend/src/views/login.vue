<script setup>
    import  { uiLogo, uiBox, uiField } from '@/components/ui/';

    
</script>

<template>
    <div class="login flex column center fullscreen">
        <ui-logo></ui-logo>
        <ui-box>
            <h1>Login</h1>
            <ui-field></ui-field>
        </ui-box>
    </div>
</template>

<style lang="less" scoped>
    .login {
        h1 {
            text-align: center;
        }
        .logo {
            width: 80rem;
            margin-top: -200rem;
            margin-bottom: 20rem;
        }
        .box {
            min-width: 500rem;
        }
        
    }
</style>