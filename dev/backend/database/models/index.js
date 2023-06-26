import { sequelize } from '../index.js';


import userModel from './userModel.js';
import userDetailsModel from './userDetailsModel.js';
import roleModel from './roleModel.js';
import testModel from './testModel.js';

import uiMenuModel from './uiMenuModel.js';
import uiSettings from './uiSettings.js';

export const models = {};

export async function initModels () {
    return new Promise (async function (resolve) {
        
        models.User = sequelize.define ('user', userModel);
        models.UserDetails = sequelize.define ('userDetails', userDetailsModel);
        models.Role = sequelize.define ('role', roleModel);

        models.uiMenu = sequelize.define ('uiMenu', uiMenuModel);
        models.uiSettings = sequelize.define ('uiSettings', uiSettings);

        models.testModel = sequelize.define ('testTable', testModel);
    
        models.User.hasMany(models.Role);
        models.Role.belongsTo(models.User);

        models.User.hasOne(models.UserDetails, {
            as: 'details',
            foreignKey: 'userId'
        });

    
        await sequelize.sync ({ alter: true});
        resolve ();

    })

}
