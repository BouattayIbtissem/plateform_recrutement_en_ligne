import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CandidatureService } from '../candidature.service';
import { OffreService } from '../offre.service';

@Component({
  selector: 'app-detailoffre',
  templateUrl: './detailoffre.component.html',
  styleUrls: ['./detailoffre.component.css']
})
export class DetailoffreComponent implements OnInit {

  i:number=1
  id=this.activeroute.snapshot.params["id"]
  offre:any
  items=[] as any;
  candidatureform:FormGroup
  listecandidat:any
  listeoffre:any
  candidat_id=JSON.parse(localStorage.getItem("id")!)
  offre_id=JSON.parse(localStorage.getItem("id")!) 
  username=JSON.parse(localStorage.getItem("username")!)
  constructor(private activeroute:ActivatedRoute, private offreservice:OffreService,private candidatureservice:CandidatureService,private formbuilder:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.candidatureform=this.formbuilder.group({
      id:['',Validators.required],
      accepted:['',Validators.required],
      status:['',Validators.required],
      candidat_id:['',Validators.required],
      offre_id:['',Validators.required],
    })
    console.log("id",this.id)
    this.detailoffre()
    this.getallcandidat()
    this.getalloffre()
  }
  getallcandidat(){
    this.offreservice.getallcontrate().subscribe((res:any)=>{
this.listecandidat=res
console.log("liste listecandidat",res)

    })
  }
  getalloffre(){
    this.offreservice.getalloffre().subscribe((res:any)=>{
this.listeoffre=res
console.log("liste offre",res)

    })
  }
  detailoffre(){
    this.offreservice.getoneoffre(this.id).subscribe((res:any)=>
    {this.offre=res
    console.log("detail offre",this.offre)  
    }
    )
  }

  addcandidature(){
    this.candidatureservice.addcandidature(this.candidatureform.value,this.candidat_id,this.offre_id).subscribe((res:any)=>
    {
 
      console.log("reponse",res)
      Swal.fire({
        icon: 'success',
        title: 'BON CHANCE !! attendez email de réponse '+res.username,
        imageUrl:'https://cdn1.vectorstock.com/i/thumb-large/57/10/ta-da-emoticon-vector-21205710.jpg',
        imageWidth: 238,
        imageHeight: 250,
       
      })
})
  }


}
