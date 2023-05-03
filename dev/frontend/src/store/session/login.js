import api from '@/api/';
   
export default  function (state) {

    return function (username, password) {

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
}