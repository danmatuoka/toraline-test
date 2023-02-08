export interface User {
  id: number;
  name: string;
  tax: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface IProductValue {
  productId: number;
  value: number;
}

export interface IValues {
  values: IProductValue[];
  total: number;
}
