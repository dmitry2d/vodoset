import { readonly, reactive } from "vue";
import Menu from './menu';

const menu = Menu ();

const state = reactive({
    menu: menu.state
});


export default {
    state: readonly(state),
    menu
}
