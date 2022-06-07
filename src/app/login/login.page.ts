import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  
})
export class LoginPage implements OnInit {

  Username:string
  Password:string


  constructor(public http:HttpClient,private router: Router) { 
    console.log(localStorage.getItem("data"))
    if(localStorage.getItem("data")!=null){
      if(JSON.parse(localStorage.getItem("data")).role==="admin"){
        this.router.navigate(['/record'])
      }
      else{
       this.router.navigate(['/home']) 
      }
    }
  }
  

  ngOnInit() {
  }
  LoginOTP(){
    console.log(this.Username,this.Password)
    const data ={
      username:this.Username,
      password:this.Password
    }
    this.http.post("http://localhost:8080/api/users/login",data).subscribe(res=>{
      console.log(res['message'])
      if(res['message'] != 'User not_found'){
        localStorage.setItem('data',res['message'] );
        if(JSON.parse(res['message']).role==="admin"){
          this.router.navigate(['/record'])
        }
        else{
         this.router.navigate(['/home']) 
        }
        


      }
    })
  }

}