<script setup>
    import { ref, onMounted } from 'vue';
    import  { uiLogo, uiBox, uiField, uiButton } from '@/components/ui/';

    const username = ref();
    onMounted (() => {
        username.value.focus();
    })
   
</script>

<template>
    <div class="login flex column center fullscreen">
        <div class="wrapper">
            <ui-logo><h1>Vodoset<br>2.0</h1></ui-logo>
            <ui-box class="flex column center">
                <h1>Login</h1>
                <ui-field
                    ref="username"
                    name="username"
                    label="Имя пользователя"
                    placeholder="Введите Ваш логин"
                    required="true"
                ></ui-field>
                <ui-field
                    name="password"
                    label="Пароль"
                    placeholder="Введите пароль"
                    required="true"
                    password="true"
                ></ui-field>
                <ui-button icon="add">Войти</ui-button>
            </ui-box>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .login {
        h1 {
            text-align: center;
        }
        .logo {
            margin-bottom: 10rem;
        }
        .box {
            min-width: 500rem;
            align-items: center;
        }
        .wrapper {
            margin-top: -220rem;
        }
    }
</style>