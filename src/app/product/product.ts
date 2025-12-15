import { ChangeDetectorRef, Component } from '@angular/core';
import { Card } from "../card/card";
import { Apiservice } from '../apiservice';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  // repeat=Array.from({length:6});
  products: any[] = [];
  constructor(private apiservice: Apiservice, private cdr: ChangeDetectorRef) { }
  ngOnInit() {
    this.apiservice.getProducts().subscribe((data: any) => {
      this.products = data.products;
      console.log(data);
      this.cdr.detectChanges();
    });

  }
}
