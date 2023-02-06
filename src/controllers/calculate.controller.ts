import { Request, Response } from 'express';
import { getCalculateService } from '../services/calculate.service';

const calculateController = async (req: Request, res: Response) => {
  try {
    const userId = req.body.userId;

    console.log(userId);
    const productsIds = req.body.productsIds;
    const values = await getCalculateService(userId, productsIds);

    return res.status(200).json(values);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        message: err.message,
      });
    }
  }
};

export default calculateController;
