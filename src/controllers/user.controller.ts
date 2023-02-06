import { Request, Response } from 'express';
import { getUserService } from '../services/user.service';

const getUserController = async (req: Request, res: Response) => {
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

export default getUserController;
