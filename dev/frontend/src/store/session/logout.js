import router from "@/router";

export default  function (state) {

    return function () {

        localStorage.removeItem ('authorization-token');
        state.token = null;
        router.go ();
    }

}