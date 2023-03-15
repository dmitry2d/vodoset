import { sequelize } from '../index.js';


import userModel from './userModel.js';
import roleModel from './roleModel.js';

export const models = {};

export async function initModels () {
    return new Promise (async function (resolve) {
        
        models.User = sequelize.define ('user', userModel);
        models.Role = sequelize.define ('role', roleModel);
    
        models.User.hasMany(models.Role);
        models.Role.belongsTo(models.User);
    
        await sequelize.sync ();
        resolve ();

    })

}
