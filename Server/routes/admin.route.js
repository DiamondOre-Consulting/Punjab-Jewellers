import {Router} from 'express';

import { signin,signup } from "../controllers/admin.controller.js";
import { signinSchema,signupSchema } from '../validator/user.validator.js';
import validate from '../middlewares/zod.validator.js';
// import { rateLimiter } from '../utils/rateLimitter.js';
import { adminMiddleware } from '../middlewares/admin.middleware.js';

const adminRouter = Router()
adminRouter.post('/signin'  , validate(signinSchema), signin)
adminRouter.post('/signup', adminMiddleware, validate(signupSchema),signup)


export default adminRouter