
import api from '@/api';
import lang from '@/lang'
import session from '../session';
import { watch, reactive, readonly } from 'vue';
// User menu
// Watches for token change and loads menu

export default function () {

    const state = reactive ({
        // raw: {}
    })

    watch (() => session.state.token, async value => {

        return new Promise(async resolve => {

            const result = await (api.uiMenu (session.state.token.JWTString));
            state.raw = result;
            state.flat = getFlat();
            state.names = getMenuNames();
            resolve (result);
        });

    });
    const getFlat = function () {
        return [
            ...(state.raw?.default_menu || []),
            ...(state.raw?.role_menu || [])
        ]
    }
    const getMenuNames = function (raw) {
        return [
            ...(state.raw?.default_menu || []),
            ...(state.raw?.role_menu || [])
        ].map (item => {
            return lang (item.name, 'ru', 'menu');
        })
    };

    return {
        state: readonly(state)
    }

}