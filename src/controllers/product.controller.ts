import { Request, Response } from 'express';
import { getProductService } from '../services/product.service';

const getProductController = async (req: Request, res: Response) => {
  try {
    const products = await getProductService();

    return res.status(200).json(products);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        message: err.message,
      });
    }
  }
};

export default getProductController;
