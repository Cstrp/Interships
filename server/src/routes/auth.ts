import express, { Router } from 'express';
import * as authController from '../controller';
import { ROUTES } from '../models';

const authRouter: Router = express.Router();

authRouter.post(ROUTES.SIGN_UP, authController.signUp);
authRouter.post(ROUTES.SIGN_IN, authController.signIn);

export { authRouter };
