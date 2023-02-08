import { IValues, Product, User } from '../interfaces/user';

export const userCalculateService = (
  user: User,
  productsIds: number[],
  products: Product[]
): IValues => {
  const filterProducts = products.filter((elem) =>
    productsIds.includes(elem.id)
  );

  const values = filterProducts.map((elem) => ({
    productId: elem.id,
    value: elem.price * (user.tax / 100),
  }));

  const totalValue = filterProducts
    .map((elem) => elem.price * (user.tax / 100))
    .reduce((a, b) => a + b);

  const total = parseFloat(totalValue.toFixed(2));

  const newData = { values, total };

  return newData;
};
