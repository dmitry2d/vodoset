
import api from '@/api';
import lang from '@/lang'
import session from '../session';
import { watch, reactive, readonly } from 'vue';

// User menu
// Watches for token change and loads menu

export default function () {

    const state = reactive ({
        raw: {},
        flat: [],
        names: []
    })

    watch (() => session.state.token, async value => {
        if (session.state.token) {
            const result = await (api.uiMenu (session.state.token.JWTString));
            state.raw = result;
            state.flat = getFlat();
            state.names = getMenuNames();
        };
    });
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
    };
    const getIndexFromViewName = viewName => {
        const found = (state.flat || []).findIndex (menuItem => {
            return menuItem.name == viewName
        })
        return found || 0;
    }

    return {
        state: readonly(state),
        getIndexFromViewName
    }

}