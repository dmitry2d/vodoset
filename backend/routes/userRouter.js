import { Router } from 'express';
import * as userController from '../controllers/userController.js';
import { authMW } from '../middleware/index.js';

const router = new Router ();

router.post ('/register', userController.register);
router.post ('/login', userController.login);
router.get ('/auth',  authMW, userController.check);

export default router;

