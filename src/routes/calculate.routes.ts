import { Router } from 'express';
import calculateController from '../controllers/calculate.controller';

const calculateRoutes = Router();

calculateRoutes.post('', calculateController);

export default calculateRoutes;
