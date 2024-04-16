import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { login } from '../database';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router){}
 logindat = login;
 username:string='';
 password:string ='';
 show:boolean =false
  ngOnInit(): void {
    console.log(this.logindat)
  }
  login =()=>{
   console.log("Form Submitted !",this.username,this.password)
      this.logindat.forEach((element)=>{
        if(this.username === element.cname && this.password === element.cpassword){
          this.router.navigate(["/profile"])
         }
         else{
          this.show = true;
         }
      })
  
  }
}
