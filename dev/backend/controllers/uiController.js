import { Op } from 'sequelize';
import { models } from '../database/models/index.js';
import apiError from '../errors/apiError.js';

const fieldsToGet = ['name', 'icon', 'view'];

async function menu (req, res, next) {
    const default_menu = await models.uiMenu.findAll ({
        where: {
            roles: {
                [Op.contains] : ['USER']
            }
        },
        attributes: fieldsToGet
    })
    const role_menu = await models.uiMenu.findAll ({
        where: {
            roles: {
                [Op.contains] : [req.user?.role]
            }
        },
        attributes: fieldsToGet
    })
   
    return res.json({default_menu, role_menu});
    
}

export default {
    menu
}