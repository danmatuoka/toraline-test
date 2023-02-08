import { Router } from 'express';
import getProductController from '../controllers/product.controller';

const productRoutes = Router();

productRoutes.get('', getProductController);

export default productRoutes;
