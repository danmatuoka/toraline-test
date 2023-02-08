import { Router } from 'express';
import { getUserController } from '../controllers/user.controller';
import { userCalculateController } from '../controllers/userCalculate.controller';
import validateProductsIds from '../middlewares/validateData.middleware';

const userRoutes = Router();

userRoutes.get('', getUserController);
userRoutes.post('/calculate/:id', validateProductsIds, userCalculateController);

export default userRoutes;
