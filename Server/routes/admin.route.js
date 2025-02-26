import {Router} from 'express';

import { signin,signup } from "../controllers/admin.controller.js";
import { signinSchema,signupSchema } from '../validator/user.validator.js';
import validate from '../middlewares/zod.validator.js';

const adminRouter = Router()
adminRouter.post('/signin',validate(signinSchema),signin)
adminRouter.post('/signup',validate(signupSchema),signup)


export default adminRouter