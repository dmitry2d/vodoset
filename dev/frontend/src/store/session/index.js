import useAuth from './auth';
import useSettings from './settings';

export default function (store) {

    const auth = useAuth (store);

    return {
        auth
    }

}
