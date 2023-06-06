import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EntrepriseService } from '../entreprise.service';
import { OffreService } from '../offre.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {

  offreform:FormGroup
  listcategory:any
  listelieu:any
  listecontrate:any
  listeentreprise:any
  client:any
  username=JSON.parse(localStorage.getItem("username")!)
  id=JSON.parse(localStorage.getItem("id")!)
  constructor(private offreservice:OffreService,private entrepriseservice:EntrepriseService,private formbuilder:FormBuilder,private route:Router) { }
  ngOnInit(): void {
    this.offreform=this.formbuilder.group({
      id:['',Validators.required],
      title:['',Validators.required],
      description:['',Validators.required],
      salaire:['',Validators.required],
      category_id:['',Validators.required],
      entreprise_id:['',Validators.required],
      lieu_id:['',Validators.required],
      contrate_id:['',Validators.required]
    })
    
    this.getallcategory()
    this.getallcontrate()
    this.getalllieu()
    this.getallentreprise()
    this.detailentreprise()
  }


  getallcategory(){
    this.offreservice.getallcategoryy().subscribe((res:any)=>{
this.listcategory=res
console.log("liste category",res)

    })
  }
  getalllieu(){
    this.offreservice.getalllieu().subscribe((res:any)=>{
this.listelieu=res
console.log("liste lieu",res)

    })
  }
  getallentreprise(){
    this.offreservice.getallentreprise().subscribe((res:any)=>{
this.listeentreprise=res
console.log("liste entreprise",res)

    })
  }
  getallcontrate(){
    this.offreservice.getallcontrate().subscribe((res:any)=>{
this.listecontrate=res
console.log("liste contrate",res)

    })
  }
  addoffre(){
    this.offreservice.addoffre(this.offreform.value,this.offreform.value.category_id,this.offreform.value.entreprise_id,this.offreform.value.lieu_id,this.offreform.value.contrate_id).subscribe((res:any)=>
    {
console.log("res",res)
this.route.navigateByUrl("/home/listoffre")
})
  }

  detailentreprise(){
    this.entrepriseservice.getoneentreprise(this.id).subscribe((res:any)=>
    {
      this.client=res
      console.log("client",this.client)
    }
    )
  }
  logout(){
    localStorage.clear();
    this.route.navigateByUrl("/home/login")
      }
  
}
