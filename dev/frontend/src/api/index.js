import useRequest from './request.js';

const env = import.meta.env;

const envPrefix = 'VITE_API_';

const endpoint = env[envPrefix + 'ENDPOINT'];
const address = envName => endpoint + env[envPrefix + envName];
    
const auth = useRequest (address('AUTH'), 'GET');
const login = useRequest (address('LOGIN'), 'POST');
const uiMenu = useRequest (address('UIMENU'), 'GET');
const saveUserSettings = useRequest (address('USERSETTINGS'), 'POST');
const loadUserSettings = useRequest (address('USERSETTINGS'), 'GET');

export default {
    auth,
    login,
    uiMenu,
    saveUserSettings,
    loadUserSettings
}