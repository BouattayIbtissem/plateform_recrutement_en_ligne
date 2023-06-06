import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http:HttpClient) { }
  signupcandidat(candidat:any)

  {
    return this.http.post(`${environment.baseurl}/candidat/signup`,candidat)
  }
  signin(user:any){
    return this.http.post(`${environment.baseurl}/api/auth/signin`,user)
  }
  
  signupentreprise(entreprise:any)
  {
    return this.http.post(`${environment.baseurl}/entreprise/signupentreprise`,entreprise)
  }

  getJwtToken(){
    return localStorage.getItem('token')!
  }

  forget(email:any){
    return this.http.post(`${environment.baseurl}/api/auth/forgetpassword?email=${email}`,{})
  }

  reset(passwordresettoken:any,newpassword:any){
    return this.http.post(`${environment.baseurl}/api/auth/savepassword/${passwordresettoken}?newpassword=${newpassword}`,{})
  }
}
