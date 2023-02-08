import { NextFunction, Request, Response } from 'express';

const validateProductsIds = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const productsIds = req.body.productsIds;

  if (productsIds.length == 0)
    return res.status(400).json({
      message: 'ProductsIds is a required field',
    });

  productsIds.map((elem: number) => {
    if (typeof elem != 'number' || elem == 0)
      return res.status(400).json({
        message: 'Only accepts numbers and greater than zero',
      });
  });

  next();
};

export default validateProductsIds;
