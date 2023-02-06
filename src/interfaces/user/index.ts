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

export interface IValues {
  user: string;
  values: string[];
  totalValue: string;
}
