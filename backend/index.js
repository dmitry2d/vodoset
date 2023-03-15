
import express from 'express';
import cors from 'cors';

import { config } from 'dotenv';
import { initDatabase } from './database/index.js';
import { router } from './routes/index.js';
import { errorHandling } from './middleware/index.js';


(async () => {
    try {

        config ({path: `.${process.env.NODE_ENV}.env`});

        await initDatabase (process.env);

        const app = express ()
        .use (cors())
        .use (express.json())
        .use ('/api', router)
        .use (errorHandling)
        .listen (process.env.PORT, () => {
            console.log (`Server started at ${process.env.PORT}`);
        });

    } catch (error) {
        console.log (error);
    }
})();


