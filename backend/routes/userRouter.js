import { Router } from 'express';
import * as userController from '../controllers/userController.js';

const router = new Router ();

router.post ('/register', userController.register);
router.post ('/login', userController.login);
router.get ('/auth', userController.check);

export default router;

