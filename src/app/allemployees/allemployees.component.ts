import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllemployeesService } from '../allemployees.service';

@Component({
  selector: 'app-allemployees',
  templateUrl: './allemployees.component.html',
  styleUrls: ['./allemployees.component.css']
})
export class AllemployeesComponent implements OnInit {
  allemployees:any=[]
  search="";
  page="";
  limit="";
  order="";
  column="";
  Next()
  {
    this.allemployeesService.getpageallemployees(this.page,this.limit).subscribe(
      (data:any)=>{
        this.allemployees=data;
      },
      (error:any)=>{
        alert("serverdown")
      }
    )
  }
  sort()
  {
    this.allemployeesService.getSortByallemployees(this.column,this.order).subscribe(
      (data:any)=>
      {
        this.allemployees=data;
      },
      (error:any)=>
      {
        alert("serverdown")
      }
    )
  }
  
  filter()
  {
    this.allemployeesService.getFilteredallemployees(this.search).subscribe(
      (data:any)=>
      {
        this.allemployees=data;
      },
      (error:any)=>
      {
        alert("serverdown");
      }
    )
  }
  
  constructor(private allemployeesService:AllemployeesService,private router:Router)
   {this.allemployeesService.getallemployees().subscribe(
     value=>{
       this.allemployees=value
     },
     error=>{alert("error")}
   ) }

  ngOnInit(): void {
  }
  view(id:any)
  {
    this.router.navigateByUrl("/dashboard/employeedetails/"+id)
  }

}