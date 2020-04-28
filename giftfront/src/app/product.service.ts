import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { LoginResponse} from './models'
import { RegistrationResponse } from './registrate';
import { ProductModel, CategoryModel, User, Order} from './models'


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BASE_URL = 'http://localhost:8000'
  constructor( private http: HttpClient) { }
  //private productsUrl = 'api/products';  
  //private categoriesUrl = 'api/categories';  

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>( `${this.BASE_URL}/api/products/`)
  }

  getProduct(id: number): Observable<ProductModel> {
    return this.http.get<ProductModel>(`${this.BASE_URL}/api/products/${id}`);
  }

  getCategory(): Observable<CategoryModel[]> {
     return this.http.get<CategoryModel[]>( `${this.BASE_URL}/api/categories/`)
    
  }

  // getCategories(id: number): Observable<CategoryModel> {
  //   return this.http.get<CategoryModel>(`${this.BASE_URL}/api/categories/${id}/`);

  // }
 

  getProductofC(categoryId: number): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${this.BASE_URL}/api/categories/${categoryId}/products`);
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

    console.error(error); 

    return of(result as T);
    };
  }
  
  searchHeroes(term: string): Observable<ProductModel[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<ProductModel[]>(`${this.BASE_URL}/api/products/?name=${term}`).pipe(
    catchError(this.handleError<ProductModel[]>('searchProducts', []))
    );
  }

  login(username, password): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username: username,
      password: password
    })
  }
  register(username, password): Observable<RegistrationResponse> {
    return this.http.post<RegistrationResponse>('http://127.0.0.1:8000/api/newusers/', {
      username,
      password
    });
  }
  getUser():Observable<User>{
    return this.http.get<User>(`${this.BASE_URL}/api/user`)
  }
  
  getUserOrders(id: number): Observable<Order[]>{
    return this.http.get<Order[]>(`${this.BASE_URL}/api/orders/${id}`)
  }

}

