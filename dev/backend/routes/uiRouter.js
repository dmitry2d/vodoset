import { Router } from 'express';
import { uiController } from '../controllers/index.js';
import { authMiddleware } from '../middleware/index.js';

const uiRouter = new Router ();

uiRouter.get ('/menu', authMiddleware, uiController.menu);

export {
    uiRouter
};

