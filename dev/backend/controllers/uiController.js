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

async function saveSettings (req, res, next) {
    
    const matrix = req.query.matrix || '[]';

    const existingSettings = await models.uiSettings.findOne ({where: {userId: req.user.id}})
    
    if (!existingSettings) {
        const result = await models.uiSettings.create ({userId: req.user.id, matrix})
        return res.json({success: !!result || [] [0]})    
    } else {
        const result = await models.uiSettings.update ({matrix},{where: {userId: req.user.id}})
        return res.json({success: !!result || [] [0]})
    }

}

async function loadSettings (req, res, next) {
    const result = await models.uiSettings.findOne ({where: {userId: req.user.id}})
    if (result) {
        return res.json({
            data: result.matrix
        })
    }
    return res.json ({})
}

export default {
    menu,
    saveSettings,
    loadSettings
}