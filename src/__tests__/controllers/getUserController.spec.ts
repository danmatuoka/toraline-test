// import { Request, Response } from 'express';
// import getUserController from '../../controllers/product.controller';
// import { getUserService } from '../../services/user.service';
// import { mockUsers } from '../__mocks__';

// jest.mock('../../services/user.service');

// describe('getUserController', () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   let req: Request;
//   const res = {
//     status: jest.fn().mockReturnValue({
//       send: jest.fn().mockReturnValue({}),
//       json: jest.fn().mockReturnValue({}),
//     }),
//   } as unknown as Response;

//   it('should return users with status code 200', async () => {
//     (getUserService as jest.Mock).mockResolvedValue(mockUsers);

//     const result = await getUserController(req, res);

//     console.log(result);

//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.status(200).json).toHaveBeenCalledWith(mockUsers);
//   });

//   it('should return error with status code 400', async () => {
//     const error = new Error('error');
//     (getUserService as jest.Mock).mockRejectedValue(error);

//     const result = await getUserController(req, res);

//     console.log(result);

//     expect(res.status).toHaveBeenCalledWith(400);
//     expect(res.status(400).send).toHaveBeenCalledWith({
//       message: error.message,
//     });
//   });
// });
