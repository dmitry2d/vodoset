<script setup>

    import { ref, reactive, onMounted, computed } from 'vue';
    import  { uiLogo, uiBox, uiField, uiButton } from '@/components/ui/';
    import store from '@/store/';
    import router from '@/router/';
    import lang from '@/lang';

    const userLanguage = ref('ru');

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
        form.error = '';
        form.username.error = '';
        form.password.error = '';
        if (!form.username.value) {
            form.username.error = 'Enter User Name';
            return;
        }
        if (!form.password.value) {
            form.password.error = 'Enter Password';
            return;
        }
        const result = await store.session.auth.login(form.username.value, form.password.value);
        if (!result.success) {
            switch (result.code) {
                case 102: 
                    form.error = 'User Not Registered';
                break;
                case 103: 
                    form.error = 'Wrong Password';
            }
            return;
        }
        router.replace('/');
    };

    const usernameError = computed (() => {
        return lang(form.username.error, userLanguage.value, 'errors')
    })
    const passwordError = computed (() => {
        return lang(form.password.error, userLanguage.value, 'errors')
    })
    const formError = computed (() => {
        return lang (form.error, userLanguage.value, 'errors')
    })
   
</script>

<template>
    <div class="login flex column center fullscreen">
        <div class="wrapper">
            <ui-logo><h1>Vodoset<br>2.0</h1></ui-logo>
            <ui-box class="flex column center">
                <h1>{{ lang('Authorization', userLanguage) }}</h1>
                <ui-field
                    ref="usernameField"
                    name="username"
                    :label="lang('User Name', userLanguage)"
                    :placeholder="lang('Enter User Name', userLanguage)"
                    required="true"
                    v-model:error="usernameError"
                    v-model:value="form.username.value"
                />
                <ui-field
                    name="password"
                    :label="lang('Password', userLanguage)"
                    :placeholder="lang('Enter Password', userLanguage)"
                    required="true"
                    password="true"
                    v-model:error="passwordError"
                    v-model:value="form.password.value"
                />
                <ui-button
                    icon="add"
                    @click="onLoginFormSubmit"
                    >{{ lang('Log In', userLanguage) }}
                </ui-button>
                <div class="error">
                    {{ formError }}
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
        .error {
            color: rgb(@c-red);
        }
    }
</style>