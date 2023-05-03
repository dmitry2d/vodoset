import { readonly, reactive, watch } from 'vue';
import Auth from './auth';
import Login from './login';
import Logout from './logout';

const state = reactive({
    token: null
});

const auth = Auth (state);
const login = Login (state);
const logout = Logout (state);

export default {
    auth,
    login,
    logout,
    state: readonly(state)
}
