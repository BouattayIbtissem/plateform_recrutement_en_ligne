import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntrepriseService } from '../entreprise.service';

@Component({
  selector: 'app-detailentreprise',
  templateUrl: './detailentreprise.component.html',
  styleUrls: ['./detailentreprise.component.css']
})
export class DetailentrepriseComponent implements OnInit {
items=[] as any;
  i:number=1
  id=JSON.parse(localStorage.getItem("id")!)
  listcategory:any
  cand:any
  constructor(private activeroute:ActivatedRoute, private entrepriseservice:EntrepriseService) { }
  

  ngOnInit(): void {
    console.log("id",this.id)
  
    this.detailentreprise()
    this.getallcategory()
  }
  detailentreprise(){
    this.entrepriseservice.getoneentreprise(this.id).subscribe((res:any)=>{
      this.cand=res
    console.log("detailentreprise",this.cand)  
    }
    )
  }
  getallcategory(){
    this.entrepriseservice.getallcategory().subscribe((res:any)=>{
    this.listcategory=res;
    console.log("res",this.listcategory)    
   })}

}
