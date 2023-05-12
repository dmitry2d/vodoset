import { readonly, reactive } from "vue";
import Menu from './menu';
import Settings from './settings';

const menu = Menu ();
const settings = Settings ();

const state = reactive({
    menu: menu.state,
    settings: settings.state,
    initiated: false
});

const init = function () {
    return new Promise (async resolve => {
        if (!state.initiated) {
            console.log ('Initiating User');
            await menu.init ();
            await settings.init ();
            state.initiated = true;
        }
        resolve ();
    })
}

export default {
    state: readonly(state),
    init,
    menu,
    settings
}
