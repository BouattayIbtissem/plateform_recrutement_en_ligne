import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OffreService {
  constructor(private http:HttpClient) { }

  getalloffre(){
    return this.http.get(`${environment.baseurl}/offre/`)
  }
  addoffre(offre:any,idcategory:any,identreprise:any,idlieu:any,idcontrate:any){
    return this.http.post(`${environment.baseurl}/offre/save3/${idcategory}/${identreprise}/${idlieu}/${idcontrate}`,offre)
  }
  deleteoffre(id:any){
    return this.http.delete(`${environment.baseurl}/offre/delete/${id}`)
  }
updateoffre(offre:any,id:any){
  return this.http.put(`${environment.baseurl}/offre/update/${id}`,offre)
}
getoneoffre(id:any){
  return this.http.get(`${environment.baseurl}/offre/getone/${id}`)
}
getallcategoryy(){
  return this.http.get(`${environment.baseurl}/category/`)
}
getalllieu(){
  return this.http.get(`${environment.baseurl}/lieu/`)
}
getallcontrate(){
  return this.http.get(`${environment.baseurl}/contrate/`)
}
getallentreprise(){
  return this.http.get(`${environment.baseurl}/entreprise/`)
}


}
