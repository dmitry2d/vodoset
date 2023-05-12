
import VueJwtDecode from 'vue-jwt-decode';

// Check if authorization token exists
// Delete token if it is expired

export default function (state) {

    return function () {

            if (!state.token) {
            
                const localStorageToken = localStorage.getItem ('authorization-token');
                if (localStorageToken) {
                    state.token = {
                        ...VueJwtDecode.decode(localStorageToken),
                        JWTString: localStorageToken
                    };
                }
            }
    
            if (state.token && state.token.exp - Math.ceil(Date.now() / 1000) < 3600) {
                state.token = null;
            }
    
            return (!!state.token);

    }
    
}


