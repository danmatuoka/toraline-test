import { Request, Response } from 'express';
import { api } from '../helpers/mockendApi';
import { getProductService } from '../services/product.service';
import { userCalculateService } from '../services/userCalculate.service';

export const userCalculateController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const productsIds = req.body.productsIds;
    const { data } = await api.get(`users/${userId}`);
    const products = await getProductService();

    const users = userCalculateService(data, productsIds, products);

    return res.status(200).json(users);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        message: err.message,
      });
    }
  }
};
