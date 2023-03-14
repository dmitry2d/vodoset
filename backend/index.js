
import express from 'express';
import * as dotenv from 'dotenv';
import { db_init } from './db.js';
import models from './models/models.js';

dotenv.config ({path: `.${process.env.NODE_ENV}.env`});

const app = express ();

(async () => {
    try {
        await db_init (process);
        app.listen (process.env.PORT, () => {
            console.log (`Server started at ${process.env.PORT}`);
        });
    } catch (error) {
        console.log (error);
    }
})();


