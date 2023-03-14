import { Router } from 'express';
import * as userController from '../controllers/userController.js';

const router = new Router ();

router.get ('/register', userController.register);
router.get ('/login', userController.login);
router.get ('/auth', userController.check);

export default router;

