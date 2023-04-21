import { reactive, readonly } from 'vue';
import api from '@/api/';
import VueJwtDecode from 'vue-jwt-decode';
import store from '..';

export default function () {

    const state = reactive({
        token: null
    });

    
    const check = function () {
       
        return new Promise(async resolve => {

            if (!state.token) {
                const localToken = localStorage.getItem ('authorization-token');
                if (localToken) {
                    state.token = VueJwtDecode.decode(localToken);
                }
            }

            if (state.token && state.token.exp - Math.ceil(Date.now() / 1000) < 3600) {
                state.token = null;
            }

            resolve (!!state.token);

        });
    }

    const login = function (username, password) {

        return new Promise(async resolve => {

            const result = await (api.login (null, {username, password}));
            if (result.token) {
                localStorage.setItem ('authorization-token', result.token);
                resolve({success: true});
                return;
            }
            resolve (result);

        });
        
    }

    const logout = function () {

        const localToken = localStorage.removeItem ('authorization-token');
        store.token = null;

    }

    return {
        check,
        login,
        logout,
        state
    };

}