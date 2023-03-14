
import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { db_init } from './db.js';
import { models_init } from './models/models.js';
import router from './routes/index.js';
import errorHandler from './middleware/errorHandlingMiddleware.js';

dotenv.config ({path: `.${process.env.NODE_ENV}.env`});

const app = express ();
app.use (cors());
app.use (express.json());
app.use ('/api', router);
app.use (errorHandler);

(async () => {
    try {

        await db_init (process);
        await models_init ();

        app.listen (process.env.PORT, () => {
            console.log (`Server started at ${process.env.PORT}`);
        });

    } catch (error) {
        console.log (error);
    }
})();


