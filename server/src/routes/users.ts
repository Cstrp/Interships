import express from 'express';
import { ROUTES } from '../models';
import { jwtMiddleware } from '../middleWares/jwtMiddleware';
import * as authController from '../controller';

const usersRouter = express.Router();

usersRouter.get(ROUTES.GET_USERS, jwtMiddleware, authController.getUsers);
usersRouter.delete(ROUTES.DELETE, authController.deleteUser);

export { usersRouter };
