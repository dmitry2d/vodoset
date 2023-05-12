
import store from '@/store'

// beforeEach router Middleware

export default async function (to, from, next) {

        // Check user authorization

        const auth = store.session.auth ();

        // If not, goto Login Page

        if (!auth) {
            if (to.name == 'Login') {
                return next()
            }
            return next ({name:'Login'})
        }

        // Check user initiation

        await store.user.init ();

        // Proceed to path

        next ();

}




    // if (!auth) {
    //     if (to.name != 'Login') {
    //         next({name: 'Login'})
    //     } else {
    //         next()
    //     }
    // } else {

    //     if (store.state.user.initiated) {
    //         next ()
    //     }

    //     if (to.name == 'Login') {
    //         await store.user.init()
    //         next({name: 'Home'})
    //     } else {
    //         next()
    //     }
    // }