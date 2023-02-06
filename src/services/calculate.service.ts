import { User, Product, IValues } from '../interfaces/user';
import { getProductService } from './product.service';
import { getUserService } from './user.service';

export const getCalculateService = async (
  userId: number,
  productsIds: number[]
): Promise<IValues> => {
  const users = await getUserService();
  const products = await getProductService();

  const user = users.filter((elem) => elem.id == userId);
  const filterProducts = products.filter((elem) =>
    productsIds.includes(elem.id)
  );

  const values = filterProducts.map((elem) =>
    (elem.price * (user[0].tax / 100)).toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })
  );

  const totalValue = filterProducts
    .map((elem) => elem.price * (user[0].tax / 100))
    .reduce((a, b) => a + b)
    .toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });

  const newData = { user: user[0].name, values, totalValue };

  return newData;
};
