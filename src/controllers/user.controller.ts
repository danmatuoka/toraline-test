import { Request, Response } from 'express';
import { api } from '../helpers/mockendApi';
import { getProductService } from '../services/product.service';
import {
  getUserCalculateService,
  getUserService,
} from '../services/user.service';

export const getUserController = async (req: Request, res: Response) => {
  try {
    const users = await getUserService();

    return res.status(200).json(users);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        message: err.message,
      });
    }
  }
};

export const getUserCalculateController = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = req.params.id;
    const productsIds = req.body.productsIds;
    const { data } = await api.get(`usrs/${userId}`);
    const products = await getProductService();

    const users = getUserCalculateService(data, productsIds, products);

    return res.status(200).json(users);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        message: err.message,
      });
    }
  }
};
