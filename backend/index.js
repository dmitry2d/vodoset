
import express from 'express';
import * as dotenv from 'dotenv';
import createdb from './db.js';

dotenv.config({path: `.${process.env.NODE_ENV}.env`});
const app = express();


(async () => {
    try {
        const sequilize = createdb();
        await sequilize.authenticate();
        await sequilize.sync();
        app.listen(process.env.PORT, () => {
            console.log (`Server started at ${process.env.PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
})();


