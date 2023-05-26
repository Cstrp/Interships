import express from 'express';
import {ROUTES} from '../models';
import {jwtMiddleware} from '../middleWares';
import * as authController from '../controller';

const usersRouter = express.Router();

usersRouter.get(ROUTES.GET_USERS, jwtMiddleware,  authController.getUsers);
usersRouter.put(ROUTES.UPDATE_USER_STATUS, jwtMiddleware,  authController.updateUserStatus);
usersRouter.put(ROUTES.DELETE, jwtMiddleware,  authController.deleteUser);

export {usersRouter};
