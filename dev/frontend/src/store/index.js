
// App Store

import { readonly } from 'vue';
import useSession from './session';

const session = useSession ();

const state = {
    auth: session.auth.state   
};

export default {
    state: readonly(state),
    session: readonly(session)
}
