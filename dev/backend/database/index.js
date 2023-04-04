import { Sequelize } from 'sequelize';
import { initModels } from './models/index.js';

export var sequelize;

export function initSequelize (config) {
    return new Promise (async function (resolve) {
        sequelize = new Sequelize (
            config.DB_NAME,
            config.DB_USER,
            config.DB_PASSWORD,
            {
                dialect: 'postgres',
                host: config.DB_HOST,
                port: config.DB_PORT
            }
        );
        await sequelize.authenticate();
        resolve();
    })
}

export function initDatabase (config) {
    return new Promise (async function (resolve) {
        await initSequelize(config);
        await initModels();
        resolve();
    });
}

