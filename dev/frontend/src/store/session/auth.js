import { reactive, readonly } from 'vue';
import api from '@/api/'

export default function () {

    const state = readonly(reactive({
        token: null,
        username: null,
        role: null
    }));

    
    const check = function () {
       
        return new Promise(async resolve => {

            const localToken = localStorage.getItem ('authorization-token');

            if (!localToken) return resolve({
                success: false,
                message:'no local token'
            });

            resolve ({
                success: false,
                message: 'auth not ready yet'
            });

        });
    }

    const login = function (username, password) {

        return new Promise(async resolve => {
            const result = await (api.login (null, {username, password}))
            resolve (result);
        });
        
    }

    return {
        check,
        login,
        state
    };

}