import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  tableHeader = [];
  constructor() {
    this.tableHeader = ['name','Quantity','discount','price','unit-Stock','Unit-Weight','brand','Categoary' , 'Iamge' , 'Description']
  }

  ngOnInit() {
  }

}
