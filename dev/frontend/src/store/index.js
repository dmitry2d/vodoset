
// App Store
// It works close to Vuex store

import { readonly } from 'vue';
import session from './session';
import user from './user';


const state = {
    auth: session.state,
    user: user.state 
};

export default {
    state: readonly(state),
    session: readonly(session),
    user: readonly(user),
}
