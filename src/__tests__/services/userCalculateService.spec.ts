import { userCalculateService } from '../../services/user.service';
import { mockOneUser, mockProducts } from '../__mocks__';

describe('getUserCalculateService', () => {
  const productsIds = [1, 2];

  it('calculates the values and total correctly', () => {
    const result = userCalculateService(mockOneUser, productsIds, mockProducts);

    const expectedResult = {
      values: [
        { productId: 1, value: 50 },
        { productId: 2, value: 100 },
      ],
      total: 150,
    };

    expect(result).toEqual(expectedResult);
  });
});
