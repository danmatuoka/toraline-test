import { api } from '../../helpers/mockendApi';
import { getProductService } from '../../services/product.service';
import { mockProducts } from '../__mocks__';

describe('getProductService', () => {
  it('should return a list of products', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockProducts });

    const result = await getProductService();

    expect(api.get).toHaveBeenCalledWith('/products');
    expect(result).toEqual(mockProducts);
  });
});
