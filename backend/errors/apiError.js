
class apiError extends Error {
    constructor (status, message) {
        super ();
        Object.assign(this, {status, message});
    }
    static badRequest (message) {
        return new apiError (400, message)
    }
}
export default apiError;