import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CandidatService } from '../candidat.service';
import { CandidatureService } from '../candidature.service';
import { EntrepriseService } from '../entreprise.service';
import { OffreService } from '../offre.service';

@Component({
  selector: 'app-listcandidatnormal',
  templateUrl: './listcandidatnormal.component.html',
  styleUrls: ['./listcandidatnormal.component.css']
})
export class ListcandidatnormalComponent implements OnInit {
  username=JSON.parse(localStorage.getItem("username")!)
  id=JSON.parse(localStorage.getItem("id")!)
  listcandidature:any
  listoffre:any
  p: number = 1;
  cand:any
  page = 1;
  count = 0;
  pageSize =2;
  pageOfItems: Array<any>;
  pageSizes = [3, 6, 9];
  constructor(private activeroute:ActivatedRoute,private modalService: NgbModal,private candidatservice:CandidatService,private candidatureservice:CandidatureService,private offreservice:OffreService,private entrepriseservice:EntrepriseService,private formbuilder:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.getAllCandidature();
    this.detailcandidat();
    console.log("cand",this.listcandidature)
    }
  
  
  
  getAllCandidature() {
    this.candidatureservice.getallcandidature().subscribe( (res: any) => {
          this.listcandidature=res.filter((el:any)=>el.candidat.id==this.id)
          console.log("res",this.listcandidature) 
          
      }) 
    
  }
  getalloffre(){
    this.offreservice.getalloffre().subscribe((res:any)=>{
    this.listoffre=res;
    console.log("res",this.listoffre)    
   } )
  }
  detailcandidat(){
    this.candidatservice.getonecandidat(this.id).subscribe((res:any)=>{
      this.cand=res
    console.log("detailcandidat",this.cand)  
    }
    )
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
handlePageChange(event: number): void {
  this.page = event;
  this.getalloffre();
}

handlePageSizeChange(event: any): void {
  this.pageSize = event.target.value;
  this.page = 1;
  this.getalloffre();
}


}
