import { Router } from 'express';
import { userRouter } from "./userRouter.js"
import { uiRouter } from "./uiRouter.js"

const router = new Router ();

router.use ('/user', userRouter);
router.use ('/ui', uiRouter);

export {
    router
 };