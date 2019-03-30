import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // importing package to make angular make http requests

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get("http://localhost:3000/products").toPromise() // converting to promise object so that we can use async and await objects
  }
}
