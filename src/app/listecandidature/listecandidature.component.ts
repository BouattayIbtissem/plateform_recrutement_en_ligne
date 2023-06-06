import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { CandidatService } from '../candidat.service';
import { CandidatureService } from '../candidature.service';
import { EntrepriseService } from '../entreprise.service';
import { OffreService } from '../offre.service';

@Component({
  selector: 'app-listecandidature',
  templateUrl: './listecandidature.component.html',
  styleUrls: ['./listecandidature.component.css']
})
export class ListecandidatureComponent implements OnInit {
  entreprise:any
  listcandidature:any
  p: number = 1;
  listoffre:any
  listcandidat:any
  username=JSON.parse(localStorage.getItem("username")!)
  idd=JSON.parse(localStorage.getItem("id")!)

  candidature:any
  constructor(private activeroute:ActivatedRoute,private modalService: NgbModal,private candidatservice:CandidatService,private candidatureservice:CandidatureService,private offreservice:OffreService,private entrepriseservice:EntrepriseService,private formbuilder:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.detailentreprise()
    this.getallcandidature()
    this.getallcandidat()
    this.getalloffre()
    this.detailcandidature()
  }
  detailentreprise(){
    this.entrepriseservice.getoneentreprise(this.idd).subscribe((res:any)=>
    {
      this.entreprise=res
      console.log("entreprise",this.entreprise)
    })}
    detailcandidature(){
      this.candidatureservice.getonecandidature(this.idd).subscribe((res:any)=>
      {
        this.candidature=res
        console.log("cand",this.candidature)
      })}

    getallcandidature(){
      this.candidatureservice.getallcandidature().subscribe((res:any)=>{
      this.listcandidature=res;
      console.log("res",this.listcandidature)    
     })}

     getalloffre(){
      this.offreservice.getalloffre().subscribe((res:any)=>{
      this.listoffre=res;
      console.log("res",this.listoffre)    
     })}
     getallcandidat(){
      this.candidatservice.getallcandidat().subscribe((res:any)=>{
      this.listcandidat=res;
      console.log("res",this.listcandidat)    
     } )
  
    }
    refuseCandidature(candidature: any, id: any) {
      this.candidatureservice.refuseCandidature(candidature, id).subscribe(
        (res: any) => {
          Swal.fire({
            icon: 'success',
            text: 'Candidature rejected !'
          })
        
        }
      )
    }
    
      acceptCandidature(candidature:any, id: any) {
        this.candidatureservice.acceptCandidature(candidature,id).subscribe(
          (res: any) => {
            Swal.fire({
              icon: 'success',
              text: 'Candidature accepted !'
            })

          }
        )
      }
}
