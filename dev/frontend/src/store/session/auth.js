import { reactive } from 'vue';

export default function (store) {

    const state = reactive({
        token: null,
        username: null,
        role: null
    });

    
    const check = function () {
        /*
  
        get local token
        if not return
        if yes call api auth
        if return token - set new token and user
        if not clear state

*/
        const token = localStorage.getItem ('authorization-token');
        
        
        
    }
    
    const getLocalToken = function () {
        
    }
    
    store.state.auth = state;

    return {
        check
    };

}