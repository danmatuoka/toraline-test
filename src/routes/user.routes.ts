import { Router } from 'express';
import {
  getUserController,
  getUserCalculateController,
} from '../controllers/user.controller';
import validateProductsIds from '../middlewares/validateData.middleware';

const userRoutes = Router();

userRoutes.get('', getUserController);
userRoutes.post(
  '/calculate/:id',
  validateProductsIds,
  getUserCalculateController
);

export default userRoutes;
