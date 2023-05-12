import { sequelize } from '../index.js';


import userModel from './userModel.js';
import roleModel from './roleModel.js';

import uiMenuModel from './uiMenuModel.js';
import uiSettings from './uiSettings.js';

export const models = {};

export async function initModels () {
    return new Promise (async function (resolve) {
        
        models.User = sequelize.define ('user', userModel);
        models.Role = sequelize.define ('role', roleModel);

        models.uiMenu = sequelize.define ('uiMenu', uiMenuModel);
        models.uiSettings = sequelize.define ('uiSettings', uiSettings);
    
        models.User.hasMany(models.Role);
        models.Role.belongsTo(models.User);
    
        await sequelize.sync ({ alter: true });
        resolve ();

    })

}
