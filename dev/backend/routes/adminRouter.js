import { Router } from 'express';
import { adminController } from '../controllers/index.js';
import { roleMiddleware } from '../middleware/index.js';

const adminRouter = new Router ();

adminRouter.post ('/menu',  roleMiddleware(['ADMIN']), adminController.createMenu);

export {
    adminRouter
};

