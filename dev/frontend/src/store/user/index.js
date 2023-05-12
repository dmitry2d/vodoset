import { readonly, reactive } from "vue";
import Menu from './menu';
import Settings from './settings';

const menu = Menu ();
const settings = Settings ();

const state = reactive({
    menu: menu.state,
    settings: settings.state
});

const init = function () {
    return new Promise (async resolve => {
        await menu.init ();
        await settings.init ();
        console.log (state.menu)
        console.log (state.settings)
        resolve ();
    })
}

export default {
    state: readonly(state),
    init,
    menu,
    settings
}
