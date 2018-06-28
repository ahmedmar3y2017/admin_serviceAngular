import { ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit , NgModule } from '@angular/core';

declare var $:any;


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent implements OnInit {
  @ViewChild('modal') modal:ElementRef;

  tableHeader = [];

   pro_name:String ;
   pro_Quantity:Number  ;
   pro_price:Number ;
   pro_discount:Number  ;
   pro_unitCost:Number  ;
   pro_UnitWeight:Number ;
   pro_brand:String;
   pro_Category:String;
   pro_Image:Array<String>;
   pro_description:String ;

  product_form:FormGroup;
  constructor(fb:FormBuilder) {
    this.tableHeader = ['name','Quantity','discount','price','unit-Stock','Unit-Weight','brand','Categoary' , 'Iamge' , 'Description'];


    this.product_form = fb.group({
      "pro_name":[null,Validators.required],
      "pro_Quantity":[null,Validators.compose([Validators.required, Validators.pattern('/^\d*[1-9]\d*$/'), Validators.maxLength(5) ])],

      "pro_price":[null,Validators.compose([Validators.required, Validators.maxLength(5) , Validators.pattern('/^\d*[1-9]\d*$/')])],

      "pro_discount":[null,Validators.compose([Validators.required, Validators.pattern('/^\d*[1-9]\d*$/') ])],

      "pro_unitCost":[null,Validators.compose([Validators.required, Validators.pattern('/^\d*[1-9]\d*$/') ])],

      "pro_UnitWeight":[null,Validators.compose([Validators.required, Validators.pattern('/^\d*[1-9]\d*$/') ])],

      "pro_brand":[null,Validators.required],

      "pro_Category":[null,Validators.required],

      "pro_Image":[null,Validators.required],

      "pro_description":[null,Validators.compose([Validators.required , Validators.maxLength(250)])],


    });
  }

  ngOnInit() {

    // to open filter input
    $(function(){
      $.noConflict();

      $('#productTable').DataTable();



      $( ".card").on('click', '.card-header .filter', function(e){
        var $this = $(this),
        $panel = $('.dataTables_filter') ,
        $entry =  $('.dataTables_length');

        setTimeout(() => {
          $panel.toggleClass('inline', 10000);
          $entry.toggleClass('inline' , 10000);
            }, 100);


        if($panel.css('display') != 'none') {
          $('.dataTables_filter input').focus();
        }
    });

  })
}






}
