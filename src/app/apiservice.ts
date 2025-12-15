import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Apiservice {
     constructor(private http:HttpClient) {}
     getProducts(){
       return this.http.get("https://dummyjson.com/products");
     }
     getsingleProducts(id:string){
       return this.http.get(`https://dummyjson.com/products/${id}`);
     }
}
