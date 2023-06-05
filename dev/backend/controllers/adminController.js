import { models } from '../database/models/index.js';
import apiError from '../errors/apiError.js';

async function createMenu (req, res, next) {

    const {
        view,
        name,
        icon,
        roles
    } = req.query;


    if (!view || !name || !icon) {
        return next(apiError.badRequest('Insufficient data: awaiting for view, name & icon', 100));
    }

    const menu = await models.uiMenu.create({
        view, name, icon,
        roles: (typeof roles =='string')?[roles]:roles
    });

    res.json({
        message: 'get all data'
    })

}

export default {
    createMenu
}
