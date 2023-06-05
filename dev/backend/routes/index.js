import { Router } from 'express';
import { userRouter } from "./userRouter.js"
import { uiRouter } from "./uiRouter.js"
import { adminRouter } from './adminRouter.js';

const router = new Router ();

router.use ('/admin', adminRouter);
router.use ('/user', userRouter);
router.use ('/ui', uiRouter);

export {
    router
 };