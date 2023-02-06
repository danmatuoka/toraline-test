import { NextFunction, Request, Response } from 'express';

const validateData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.body.userId;
  const productsIds = req.body.productsIds;

  if (typeof userId != 'number' || userId == undefined)
    return res.status(400).json({
      message: 'Mandatory field and only accepts numbers',
    });

  if (productsIds.length == 0)
    return res.status(400).json({
      message: 'ProductsIds is a required field',
    });

  productsIds.map((elem: number) => {
    if (typeof elem != 'number')
      return res.status(400).json({
        message: 'Only accepts numbers at productsIds',
      });
  });

  next();
};

export default validateData;
