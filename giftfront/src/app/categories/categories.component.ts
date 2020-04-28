import { Component, OnInit } from '@angular/core';
import { ProductService} from '../product.service'
import { ProductModel, CategoryModel, User} from '../models'
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  public categories: CategoryModel[]=[];
  public products: ProductModel[]=[];
  public inputText: string = "";
  public user: User;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
    this.getUser();
  }
  getCategories(){
    this.productService.getCategory()
      .subscribe(categories => this.categories = categories);
  }
  getProducts(){
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }
  getUser(){
    this.productService.getUser()
      .subscribe(user =>this.user = user);
  }

}
