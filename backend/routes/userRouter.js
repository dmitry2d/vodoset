import { Router } from 'express';
import { userController } from '../controllers/index.js';
import { roleMiddleware } from '../middleware/index.js';

const userRouter = new Router ();

userRouter.post ('/register', userController.register);
userRouter.post ('/login', userController.login);
userRouter.get ('/auth', userController.isAuthorized);

userRouter.get ('/users',  roleMiddleware(['ADMIN']), userController.getUserList);

export {
    userRouter
};

