import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeedetailsService {

  constructor(private httpclient:HttpClient) { }
  employeedetails(id:any):Observable<any>
  {
    return this.httpclient.get("https://6222413b666291106a21d80b.mockapi.io/employees/"+id)
  }
}
