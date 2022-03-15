import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  @Input() product:any={}
  delete(){

  }
  addcard(){
    
  }

  constructor() { }


  ngOnInit(): void {
  }

}
