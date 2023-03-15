import { Router } from 'express';
import user from "./userRouter.js"

const router = new Router ();

router.use ('/user', user);

export { router };