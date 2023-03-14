import { Sequelize } from 'sequelize';

export var db;

export function db_init (process) {
    return new Promise (async function (resolve) {
        db = new Sequelize (
            process.env.DB_NAME,
            process.env.DB_USER,
            process.env.DB_PASSWORD,
            {
                dialect: 'postgres',
                host: process.env.DB_HOST,
                port: process.env.DB_PORT
            }
        );
        await db.authenticate();
        resolve();
    })
}

