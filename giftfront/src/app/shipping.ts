import { Order } from './order';
import { User } from './User';

export class Shipping implements Order, User {
  constructor(
   public name: string,
   public surname: string,
   public phone: string,
   public address: string,
   public items: import("./product").Product[],

  ) {  }
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  
  
  id: number;
  userName: string;
  

}
