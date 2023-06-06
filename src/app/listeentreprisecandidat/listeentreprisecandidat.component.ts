import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from '../entreprise.service';
import { OffreService } from '../offre.service';

@Component({
  selector: 'app-listeentreprisecandidat',
  templateUrl: './listeentreprisecandidat.component.html',
  styleUrls: ['./listeentreprisecandidat.component.css']
})
export class ListeentreprisecandidatComponent implements OnInit {
  listentreprise:any
  search_name:any
  search_address:any
  listoffre:any
  p: number = 1;
  pageOfItems: Array<any>;
 
  page = 1;
  count = 0;
  pageSize =2;
  pageSizes = [3, 6, 9];
  constructor(private entrepriseservice:EntrepriseService) { }

  ngOnInit(): void {
    this.getallentreprise()
  }
    
  getallentreprise(){
    this.entrepriseservice.getallentreprise().subscribe((res:any)=>{
    this.listentreprise=res;
    console.log("res",this.listentreprise)    
   } )

  }
  filtrageadress(event:any){

    this.entrepriseservice.getallentreprise().subscribe((res:any)=>{
      this.listentreprise=res.filter((el:any)=>el.domaine==event.target.value)

  }) 
  console.log(this.listentreprise) 


  }
  filtragedomaine(event:any){

    this.entrepriseservice.getallentreprise().subscribe((res:any)=>{
      this.listentreprise=res.filter((el:any)=>el.entreprise.domaine==event.target.value)

  }) 
  console.log(this.listentreprise) 


  }


  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
handlePageChange(event: number): void {
  this.page = event;
  this.getallentreprise();
}

handlePageSizeChange(event: any): void {
  this.pageSize = event.target.value;
  this.page = 1;
  this.getallentreprise();
}

}
