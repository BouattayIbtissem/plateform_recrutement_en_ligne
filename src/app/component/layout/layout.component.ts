import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidatService } from 'src/app/candidat.service';
import { CartService } from 'src/app/cart.service';
import { EntrepriseService } from 'src/app/entreprise.service';
import { OffreService } from 'src/app/offre.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  client:any
  items=[] as any;
  i=0
  username=JSON.parse(localStorage.getItem("username")!)
  listentreprise:any
  p: number = 1;
  c: number = 1;
  listecontrate:any
  listcandidat:any
  id=JSON.parse(localStorage.getItem("id")!)
  listoffre:any
  page = 1;
  count = 0;
  pageSize =2;
  pageSizes = [3, 6, 9];
  search_name:any
  search_title:any
  pageOfItems: Array<any>;
  constructor(private cartservice:CartService,private offreservice:OffreService,private candidatservice:CandidatService,private entrepriseservice:EntrepriseService) { }

  ngOnInit(): void {
    this.cartservice.loadcart();
    this.items=this.cartservice.getItem();
    console.log("items",this.items)
  this.detailcandidat()
  this.detailentreprise()
  console.log("id",this.id)
  this.getallentreprise()
  this.getallcontrate()
  this.getalloffre()
  this.getallcandidat()
 
  }
  detailcandidat(){
    this.candidatservice.getonecandidat(this.id).subscribe((res:any)=>
    {
      this.client=res
      console.log("client",this.client)
    }
    )
  }
  detailentreprise(){
    this.entrepriseservice.getoneentreprise(this.id).subscribe((res:any)=>
    {
      this.client=res
      console.log("client",this.client)
    }
    )
  }
  getallentreprise(){
    this.entrepriseservice.getallentreprise().subscribe((res:any)=>{
    this.listentreprise=res;
    console.log("res",this.listentreprise)    
   } )

  }
  getallcontrate(){
    this.offreservice.getallcontrate().subscribe((res:any)=>{
this.listecontrate=res
console.log("liste contrate",res)

    })
  }
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
  filtrageprofil(event:any){

    this.candidatservice.getallcandidat().subscribe((res:any)=>{
      this.listcandidat=res.filter((el:any)=>el.profile==event.target.value)

  }) 
  console.log(this.listcandidat) 

  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
handlePageChange(event: number): void {
  this.page = event;
  this.getallcandidat();
}

handlePageSizeChange(event: any): void {
  this.pageSize = event.target.value;
  this.page = 1;
  this.getallcandidat();
}
}
