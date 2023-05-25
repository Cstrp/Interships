import express, { Router } from 'express';
import * as checkController from '../controller';
import { ROUTES } from '../models';

const checkRouter: Router = express.Router();

checkRouter.get(ROUTES.CHECK_HEALTH, checkController.checkConnection);

export { checkRouter };
