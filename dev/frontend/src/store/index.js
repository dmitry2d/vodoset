
// App Store

import { reactive, readonly } from 'vue';
import useSession from './session';

const store = {
    state: readonly ({})
};

const session = useSession (store);

export default store;
