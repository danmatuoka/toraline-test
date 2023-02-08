import { Request, Response } from 'express';
import getProductController from '../../controllers/product.controller';
import { getProductService } from '../../services/product.service';
import { mockProducts } from '../__mocks__';

jest.mock('../../services/product.service');

describe('getProductController', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  let req: Request;
  const res = {
    status: jest.fn().mockReturnValue({
      send: jest.fn().mockReturnValue({}),
      json: jest.fn().mockReturnValue({}),
    }),
  } as unknown as Response;

  it('should return products with status code 200', async () => {
    (getProductService as jest.Mock).mockResolvedValue(mockProducts);

    await getProductController(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.status(200).json).toHaveBeenCalledWith(mockProducts);
  });

  it('should return error with status code 400', async () => {
    const error = new Error('error');
    (getProductService as jest.Mock).mockRejectedValue(error);

    await getProductController(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.status(400).send).toHaveBeenCalledWith({
      message: error.message,
    });
  });
});
