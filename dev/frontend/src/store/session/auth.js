import { reactive } from 'vue';

export default function (state) {

    state.auth = reactive({
        token: null,
        username: null,
        role: null
    })

    const check = function () {

    }

    const getLocalToken = function () {

    }

    return {

        check

    };

}