import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService} from '../cart.service'
import { Shipping } from '../shipping';
import { Order, User} from '../models'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  user: User;
  orderedItems: Order[];
  items;
  
  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.getUser();
  }

  clearCart(){
    this.items=this.cartService.clearCart();
  }

  purchase(): void {
    
  }

  getUser(){
    this.productService.getUser()
    .subscribe( user=>this.user=user);
    
  }
  
  getUserOrders(): void{
    this.productService.getUserOrders(this.user.id)
    .subscribe( orderedItems=>this.orderedItems=orderedItems);
  }
}
