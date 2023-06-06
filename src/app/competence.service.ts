import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {
  constructor(private http:HttpClient) { }

  getallcompetence(){
    return this.http.get(`${environment.baseurl}/competence/`)
  }
  addcompetence(competence:any,idcandidat:any){
    return this.http.post(`${environment.baseurl}/competence/save3/${idcandidat}`,competence)
  }
  deletecompetence(id:any){
    return this.http.delete(`${environment.baseurl}/competence/delete/${id}`)
  }
updatecompetence(competence:any,id:any){
  return this.http.put(`${environment.baseurl}/competence/update/${id}`,competence)
}
getonecompetence(id:any){
  return this.http.get(`${environment.baseurl}/competence/getone/${id}`)
}
addcompe(competence:any){
  return this.http.post(`${environment.baseurl}/competence/save/`,competence)
}
getonecandidat(id:any){
  return this.http.get(`${environment.baseurl}/candidat/getone/${id}`)
}

}
