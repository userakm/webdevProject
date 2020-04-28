import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  username = '';
  password = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  register() {
    this.productService.register(this.username, this.password).subscribe(res => {
      this.username = '';
      this.password = '';
    });
    window.alert('Вы успешно зарегистрировались!');
  }

}
