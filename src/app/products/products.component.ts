import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
    private router: Router,
    private productsService: ProductsServiceService
  ) { }

  products = []


  tableHeaders = ["Sno", "Name", "Company", "Manufacturer", "Price", "Owner"]
  //ngoninit is called only after html is loaded
  async ngOnInit() {
    const products = await this.productsService.getProducts()
    this.products = products['products']
  }
  navigateToAddProducts() {

    this.router.navigate(["products/add"]) // this products/add should be same as path in module.ts
  }
}
