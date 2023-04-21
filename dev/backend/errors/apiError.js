
class apiError extends Error {
    constructor (status, message, code = 0) {
        super ();
        Object.assign(this, {status, message, code});
    }
    static badRequest (message, code) {
        return new apiError (400, message, code)
    }
    static unauthorized (message, code) {
        return new apiError (401, message, code)
    }
}
export default apiError;