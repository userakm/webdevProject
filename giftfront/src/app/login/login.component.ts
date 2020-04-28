import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logged = false;

  username = '';
  password = '';

  constructor(private productService: ProductService) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }

  login() {
    this.productService.login(this.username, this.password).subscribe(res => {

      localStorage.setItem('token', res.token);

      this.logged = true;

      this.username = '';
      this.password = '';
    });
  }

  logout() {
    localStorage.clear();
    this.logged = false;
  }

}
