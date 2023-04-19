<script setup>
    import { ref, reactive, onMounted } from 'vue';
    import  { uiLogo, uiBox, uiField, uiButton } from '@/components/ui/';
    import store from '@/store/';


    const usernameField = ref();
    onMounted (() => {
        usernameField.value.focus();
    });
    
    const form = reactive({
        username: {
            value: '',
            error: ''
        },
        password:  {
            value: '',
            error: ''
        },
        error: ''
    })
    const onLoginFormSubmit = async e => {
        const result = await store.session.auth.login(form.username.value, form.password.value);
        if (result.message) {
            form.error = result.message || 'Какая-то';
        }
    };
   
</script>

<template>
{{ form.username.value }}
    <div class="login flex column center fullscreen">
        <div class="wrapper">
            <ui-logo><h1>Vodoset<br>2.0</h1></ui-logo>
            <ui-box class="flex column center">
                <h1>Login</h1>
                <ui-field
                    ref="usernameField"
                    name="username"
                    label="Имя пользователя"
                    placeholder="Введите Ваш логин"
                    required="true"
                    :error="form.username.error"
                    v-model:value="form.username.value"
                    />
                    <ui-field
                    name="password"
                    label="Пароль"
                    placeholder="Введите пароль"
                    required="true"
                    password="true"
                    :error="form.password.error"
                    v-model:value="form.password.value"
                    />
                    <ui-button
                    icon="add"
                    @click="onLoginFormSubmit"
                >Войти</ui-button>
                <div class="error">
                    {{ form.error }}
                </div>
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