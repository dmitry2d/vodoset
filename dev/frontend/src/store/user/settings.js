
import api from '@/api';
import session from '../session';
import { reactive, readonly } from 'vue';

export default function () {

    const state = reactive ({
        menuOpen: true,
        initiated: false
    })

    const init = function () {
        return new Promise (async resolve => {
            await load ();
            resolve ();
        })
    }

    const toggleMenu = function () {
        state.menuOpen = !state.menuOpen;
    }

    const save = async function () {
        const matrix = JSON.stringify([
            state.menuOpen?1:0
        ])
        const result = await (api.saveUserSettings (session.state.token.JWTString, {matrix}));
    }

    const load = async function () {
        return new Promise(async resolve => {
            const result = await (api.loadUserSettings (session.state.token.JWTString));
            const matrix = JSON.parse(result.data || '[]');
            state.menuOpen = !!matrix[0];
            resolve ();
        })
    }

    return {
        state: readonly(state),
        init,
        save,
        toggleMenu
    }

}