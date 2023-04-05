import { reactive, readonly } from 'vue';

export default function () {

    const state = readonly(reactive({
        token: null,
        username: null,
        role: null
    }));

    
    const check = function () {
       
        return new Promise(async resolve => {

            const localToken = localStorage.getItem ('authorization-token');
            if (!token) return resolve({
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

            const localToken = localStorage.getItem ('authorization-token');
            if (!token) return resolve({
                success: false,
                message:'no local token'
            });

            resolve ({
                success: false,
                message: 'login not ready yet'
            });

        });
        
    }

    return {
        check,
        state
    };

}