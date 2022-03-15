import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice:LoginService, private router:Router) { }
  login:FormGroup=new FormGroup({
    email: new FormControl(null,Validators.required),
    password: new FormControl(null,Validators.pattern('(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[$@$!%?&])[A-Za-z\d$@$!%?&].{8,}')), 
  })

  ngOnInit(): void {
  }
  SIGNIN()
  {
    
      this.loginservice.createlogin(this.login.value).subscribe(
        (data:any)=>{
          alert("success");
          localStorage.setItem("token",data.token)
          this.router.navigateByUrl("/dashboard")
        },
        (error:any)=>{
          alert("invalid user");
        }
      )
    
  }

}
