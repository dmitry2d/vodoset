import apiError from '../errors/apiError.js';

export default function (err, req, res, next) {
    if (err instanceof apiError) {
        return res.status(err.status).json({message: err.message, code: err.code})
    };
    console.log (err)
    return res.status(500).json({message: 'Unknow server error', code: 0});
}