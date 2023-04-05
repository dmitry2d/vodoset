import useAuth from './auth';

export default function () {

    const auth = useAuth ();

    return {
        auth
    }

}
