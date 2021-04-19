import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse,HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl: string ="http://127.0.0.1:8080/products";
  products : Product[];
  name: string;
  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get(this.baseUrl);
  }
  getData_xe(){
    return this.http.get("http://127.0.0.1:8080/products/xe")
  }
  // addProduct(products : Product): Observable<any>{
  //   return this.http.post(this.baseUrl, products);
  // }
  addProduct(products:Product) {
    this.http.post('http://127.0.0.1:8080/products',products)
    .subscribe((result)=> {
      console.warn("result",result)
    });
  }
//test
  click(id:Product) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return  this.http.get("http://127.0.0.1:8080/product?id=" +id ,{headers: headers}
    ).subscribe(()=>{ return;
     })
}
  
  getDataProduct(){
    return this.http.get("http://127.0.0.1:8080/product?id=607927d56833a637bfa809b0");
  }
////////////////////////////



  delProduct(id:Product) {
    return this.http.delete("http://127.0.0.1:8080/products").subscribe(() =>{
      console.log("Deleted");
    })
}

  updateProduct(id:Product, products:Product) {
    return this.http.put("http://127.0.0.1:8080/products" + id,products).subscribe(()=>{
      console.log("Updated");
    });
  }

}