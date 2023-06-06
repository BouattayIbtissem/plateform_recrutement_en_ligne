import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EntrepriseService } from '../entreprise.service';
import { OffreService } from '../offre.service';

@Component({
  selector: 'app-listeoffrecandidat',
  templateUrl: './listeoffrecandidat.component.html',
  styleUrls: ['./listeoffrecandidat.component.css']
})
export class ListeoffrecandidatComponent implements OnInit {
  listentreprise:any

  search_title:any
  p: number = 1;
  listoffre:any
  pageOfItems: Array<any>;
 
  page = 1;
  count = 0;
  pageSize =2;
  pageSizes = [3, 6, 9];

  constructor(private offreservice:OffreService) { }

  ngOnInit(): void {
    this.getalloffre()
  }
  filtragecategory(event:any){

    this.offreservice.getalloffre().subscribe((res:any)=>{
      this.listoffre=res.filter((el:any)=>el.category.nom==event.target.value)

  }) 
  console.log(this.listoffre) 


  }
  filtragecontrat(event:any){

    this.offreservice.getalloffre().subscribe((res:any)=>{
      this.listoffre=res.filter((el:any)=>el.contrate.type_contrat==event.target.value)

  }) 
  console.log(this.listoffre) 


  }

  getalloffre(){
    this.offreservice.getalloffre().subscribe((res:any)=>{
    this.listoffre=res;
    console.log("res",this.listoffre)    
   } )
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
