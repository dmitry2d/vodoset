import { db } from '../db.js';
import { DataTypes } from 'sequelize';

export const models = {};

export async function models_init () {
    return new Promise (async function (resolve) {
        models.User = db.define ('user', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            username: {
                type: DataTypes.STRING,
                unique: true
            },
            password: {
                type: DataTypes.STRING,
            },
            role: {
                type: DataTypes.STRING,
                defaultValue: 'USER'
            }
        });
        models.Role = db.define ('role', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                unique: true
            }
        });
    
        models.User.hasMany(models.Role);
        models.Role.belongsTo(models.User);
    
        await db.sync ();
        resolve ();

    })
    

}
