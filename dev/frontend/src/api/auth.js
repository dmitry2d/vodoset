
export default function (token) {

    return new Promise (async resolve => {

        const address = 
        import.meta.env.VITE_API_ENDPOINT + 
        import.meta.env.VITE_API_AUTH;

        const response = await fetch (address, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        const json = await response.json();
        resolve(json);
   
    });
    
}