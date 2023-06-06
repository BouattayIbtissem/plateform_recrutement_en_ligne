import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from '../candidat.service';
import { EntrepriseService } from '../entreprise.service';
import { OffreService } from '../offre.service';

@Component({
  selector: 'app-pageacceuil',
  templateUrl: './pageacceuil.component.html',
  styleUrls: ['./pageacceuil.component.css']
})
export class PageacceuilComponent implements OnInit {
  listentreprise:any
  p: number = 1;
  c: number = 1;
  listecontrate:any
  listcandidat:any
  listoffre:any
  role=JSON.parse(localStorage.getItem('role')!)
  constructor(private route:Router, private activeroute:ActivatedRoute,private offreservice:OffreService,private candidatservice:CandidatService,private entrepriseservice:EntrepriseService) { }

  ngOnInit(): void {
    this.getallentreprise()
    this.getalloffre()
    this.getallcandidat()
  }
  getallcandidat(){
    this.candidatservice.getallcandidat().subscribe((res:any)=>{
    this.listcandidat=res;
    console.log("res",this.listcandidat)    
   } )

  }
  getalloffre(){
    this.offreservice.getalloffre().subscribe((res:any)=>{
    this.listoffre=res;
    console.log("res",this.listoffre)    
   })}

   getallentreprise(){
    this.entrepriseservice.getallentreprise().subscribe((res:any)=>{
    this.listentreprise=res;
    console.log("res",this.listentreprise)    
   } )

  }
  testinvisibleconnect()
  {
    return localStorage.getItem('state')=="0" ? true:false 
  
  }
  logout(){
    localStorage.clear();
    this.route.navigateByUrl("/login")
      }

}
