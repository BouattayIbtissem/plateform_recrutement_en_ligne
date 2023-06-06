import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {
  constructor(private http:HttpClient){}
  token = localStorage.getItem("token")!
  headersoption = new HttpHeaders({
    Authorization:'Bearer '+ this.token
  }) 

  addcandidature(candidature:any,idcandidat:any,idoffre:any)
  {
    return this.http.post(`${environment.baseurl}/candidature/save/${idcandidat}/${idoffre}`,candidature)
  }
  getalloffre(){
    return this.http.get(`${environment.baseurl}/offre/`)
  }
  getallcandidat(){
    return this.http.get(`${environment.baseurl}/candidat/`)
  }
  getallcandidature(){
    return this.http.get(`${environment.baseurl}/candidature/`,{headers:this.headersoption})
  }
  getonecandidature(id:any){
    return this.http.get(`${environment.baseurl}/candidature/getone/${id}`)
  }
  acceptCandidature(candidature: any, id: any) {
    return this.http.put(`${environment.baseurl}/candidature/accept/${id}`, candidature)
  }
  refuseCandidature(candidature: any, id: any) {
    return this.http.put(`${environment.baseurl}/candidature/reject/${id}`, candidature)
  }
  getcandidatcandidature(id:any){
    return this.http.get(`${environment.baseurl}/candidature/${id}`)
  }
}
