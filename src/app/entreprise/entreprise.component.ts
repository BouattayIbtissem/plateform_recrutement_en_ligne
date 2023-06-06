import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EntrepriseService } from '../entreprise.service';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit {

  listentreprise:any
  search_name:any
  search_address:any
  p: number = 1;
  constructor(private entrepriseservice:EntrepriseService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getallentreprise()
  }

  getallentreprise(){
    this.entrepriseservice.getallentreprise().subscribe((res:any)=>{
    this.listentreprise=res;
    console.log("res",this.listentreprise)    
   } )

  }
  // filtrageprofil(event:any){

  //   this.entrepriseservice.getallcandidat().subscribe((res:any)=>{
  //     this.listcandidat=res.filter((el:any)=>el.profile==event.target.value)

  // }) 
  // console.log(this.listcandidat) 

  // }

  

}
