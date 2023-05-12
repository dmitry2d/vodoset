import { Router } from 'express';
import { uiController } from '../controllers/index.js';
import { authMiddleware } from '../middleware/index.js';

const uiRouter = new Router ();

uiRouter.get ('/menu', authMiddleware, uiController.menu);
uiRouter.post ('/settings', authMiddleware, uiController.saveSettings);
uiRouter.get ('/settings', authMiddleware, uiController.loadSettings);

export {
    uiRouter
};

