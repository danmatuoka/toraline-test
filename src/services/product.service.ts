import { api } from '../helpers/mockendApi';
import { Product } from '../interfaces/user';

export const getProductService = async (): Promise<Product[] | undefined> => {
  try {
    const { data } = await api.get('/products');

    return data;
  } catch (error) {
    throw new Error('Something goes wrong');
  }
};
