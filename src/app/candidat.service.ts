import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  constructor(private http:HttpClient) { }
  token = localStorage.getItem("token")!
  headersoption = new HttpHeaders({
    Authorization:'Bearer '+ this.token
  }) 
  getallcandidat(){
    return this.http.get(`${environment.baseurl}/candidat/`)
  }
  getonecandidat(id:any){
    return this.http.get(`${environment.baseurl}/candidat/getone/${id}`)
  }
}
