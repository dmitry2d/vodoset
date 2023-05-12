
export default function (address, method = 'GET') {

    return async function (token, params = {}) {

        return new  Promise (async resolve => {
            const options = {
                method: method,
                headers: {}
            }
            if (token) {
                options.headers['Authorization'] = 'Bearer ' + token
            }
            const urlAddress = address + '?' + new URLSearchParams(params);
            const response = await fetch (urlAddress, options);
            const json = await response.json();
            resolve(json);
        });

    }
    
}