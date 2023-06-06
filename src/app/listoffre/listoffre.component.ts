import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { EntrepriseService } from '../entreprise.service';
import { OffreService } from '../offre.service';

@Component({
  selector: 'app-listoffre',
  templateUrl: './listoffre.component.html',
  styleUrls: ['./listoffre.component.css']
})
export class ListoffreComponent implements OnInit {
  offreform:FormGroup
  pageOfItems: Array<any>;
  page = 1;
  count = 0;
  pageSize =2;
  pageSizes = [3, 6, 9];
 listoffre:any
 listecontrate:any
  entreprise:any
  p: number = 1;
  offre:any
  closeResult = '';
 
  username=JSON.parse(localStorage.getItem("username")!)
  idd=JSON.parse(localStorage.getItem("id")!)
  constructor(private modalService: NgbModal,private offreservice:OffreService,private entrepriseservice:EntrepriseService,private formbuilder:FormBuilder,private route:Router) { }

  ngOnInit(): void {
     this.offreform=this.formbuilder.group({
      id:['',Validators.required],
      title:['',Validators.required],
      description:['',Validators.required],
      salaire:['',Validators.required],
    
    })
      
    this.detailentreprise()
    this.getalloffre()
    this.getallcontrate()
  
    
    
  }
  detailentreprise(){
    this.entrepriseservice.getoneentreprise(this.idd).subscribe((res:any)=>
    {
      this.entreprise=res
      console.log("entreprise",this.entreprise)
    }
    )
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


  
    deleteoffre(id:any){
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
      this.offreservice.deleteoffre(id).subscribe((res:any)=>{
        console.log("responce",res)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.getalloffre()
      })
        }
  
  
  })}

  open(content:any,offreen:any) {
  this.offreform.patchValue({
    id:offreen.id,
    title:offreen.title,
    description:offreen.description,
    salaire:offreen.salaire,
    
  })
    this.modalService.open(content,{ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  logout(){
    localStorage.clear();
    this.route.navigateByUrl("/home/login")
      }
  
  
  
  ///////////////////////////////////////////
  updateoffre(){
    this.offreservice.updateoffre(this.offreform.value,this.offreform.value.id).subscribe((res:any)=>
    {
  this.getalloffre()
  
    })
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
