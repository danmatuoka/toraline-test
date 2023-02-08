import { api } from '../helpers/mockendApi';
import { Product } from '../interfaces/user';

export const getProductService = async (): Promise<Product[]> => {
  const { data } = await api.get('/products');

  return data;
};
