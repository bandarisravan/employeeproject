import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products:any=[];
  selectedproduct={};
  view(product:any){
    this.selectedproduct=product;
  }
  constructor(private shoppingService:ShoppingService,) {
    this.shoppingService.getdetails().subscribe(
      (data:any)=>
      {
        this.products=data;
      },
      (error:any)=>
        alert("server down")
    )
   }
   catch(value:any){
     this.selectedproduct={};
     this.products=this.products.filter((data:any)=>data.id!=value);
   }
  
  


  ngOnInit(): void {
  }

}
