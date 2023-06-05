
import api from '@/api';
import lang from '@/lang'
import session from '../session';
import { reactive, readonly } from 'vue';

export default function () {

    const state = reactive ({
        raw: {},
        flat: [],
        names: []
    })

    const init = function () {
        return new Promise (async resolve => {
            if (session.state.token) {
                const result = await (api.uiMenu (session.state.token.JWTString));
                state.raw = result;
                state.flat = getFlat();
                state.names = getMenuNames();
            }
            resolve ();
        })
    }

    const getFlat = function () {
        return [
            ...(state.raw?.default_menu || []),
            ...(state.raw?.role_menu || [])
        ]
    }
    
    const getMenuNames = function () {
        return [
            ...(state.raw?.default_menu || []),
            ...(state.raw?.role_menu || [])
        ].map (item => {
            return lang (item.name, 'ru', 'menu');
        })
    }

    const getIndexFromViewName = viewName => {
        console.log (state.flat, viewName)
        const found = (state.flat || []).findIndex (menuItem => {
            console.log (menuItem)
            return menuItem.name == viewName
        })
        console.log (found)
        return found || 0;
    }

    return {
        state: readonly(state),
        init,
        getIndexFromViewName
    }

}