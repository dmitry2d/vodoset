
export default  function (state) {

    return function () {

        const localToken = localStorage.removeItem ('authorization-token');
        state.token = null;
    }

}