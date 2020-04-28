import { Product } from './product';

export interface Order {
    id: number;
    userName: string;
    items: Array<Product>;
  }