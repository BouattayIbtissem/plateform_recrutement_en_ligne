import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from 'src/app/authentification.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup  
  
  constructor(private authentificationservice: AuthentificationService, private formBuilder: FormBuilder , private route: Router) { }
  ngOnInit(): void {
    this.getFormLogin()
  
  }
  getFormLogin() {
    this.loginform = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  signin() {
    this.authentificationservice.signin(this.loginform.value).subscribe(
      (res: any) => {
        if (res.enabled == true && res.roles=="ROLE_CANDIDAT") {
      localStorage.setItem('id',JSON.stringify(res.id))
      localStorage.setItem('email',JSON.stringify(res.email))
      localStorage.setItem('username',JSON.stringify(res.username))
      localStorage.setItem('role',JSON.stringify(res.roles))
      localStorage.setItem('token',(res.accessToken))
      localStorage.setItem("state","0") 
    //  this.route.navigateByUrl("/home")
    window.location.href="http://localhost:4200"
    
    
     console.log("reponse",res)
          Swal.fire({
            icon: 'success',
            title: 'Welcome '+res.username,
            imageUrl:'https://cdn1.vectorstock.com/i/thumb-large/57/10/ta-da-emoticon-vector-21205710.jpg',
            imageWidth: 238,
            imageHeight: 250,
           
          })
   
        }
        if (res.enabled == true && res.roles=="ROLE_ENTREPRISE") {
          localStorage.setItem('id',JSON.stringify(res.id))
          localStorage.setItem('email',JSON.stringify(res.email))
          localStorage.setItem('username',JSON.stringify(res.username))
          localStorage.setItem('role',JSON.stringify(res.roles))
          localStorage.setItem('token',(res.accessToken))
          localStorage.setItem("state","0") 
        //  this.route.navigateByUrl("/home")
        window.location.href="http://localhost:4200"
        
        
         console.log("reponse",res)
              Swal.fire({
                icon: 'success',
                title: 'Welcome '+res.username,
                imageUrl:'https://cdn1.vectorstock.com/i/thumb-large/57/10/ta-da-emoticon-vector-21205710.jpg',
                imageWidth: 238,
                imageHeight: 250,
               
              })
       
            }
      }, (err: any) => {
        Swal.fire({
          icon: 'error',
          title: 'Login Error',
          text: 'username or password invalid',
        })
      }
    )
  }
  

}
