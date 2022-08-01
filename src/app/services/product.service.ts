import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apiUrl = 'http://localhost:3000/products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private http: HttpClient
  ) { }
  getProducts() {
    return this.http.get(apiUrl);
  }
  getProduct(id: undefined | string) {
    return this.http.get(`${apiUrl}/${id}`)
  }
  createPrd(obj: { name: string,  old_price: number, status: number, price: number, desc: string }) {
    return this.http.post(apiUrl, obj);
  }
  updatePrd(id: number | string, obj: { name: string, old_price: number, status: number, price: number, desc: string }) {
    return this.http.put(`${apiUrl}/${id}`, obj);
  }
  deletePrd(id: number | string) {
    return this.http.delete(`${apiUrl}/${id}`)
  }
}
