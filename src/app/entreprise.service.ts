import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(private http:HttpClient) { }
  getallentreprise(){
    return this.http.get(`${environment.baseurl}/entreprise/`)
  }
  getoneentreprise(id:any){
    return this.http.get(`${environment.baseurl}/entreprise/getone/${id}`)
  }
  addCandidature(Candidature:any,candidat_id:any,offre_id:any)
  {
    return this.http.get(`${environment.baseurl}/save/${candidat_id}/${offre_id}`)
  }
  getallcategory(){
    return this.http.get(`${environment.baseurl}/category/`)
  }
}
