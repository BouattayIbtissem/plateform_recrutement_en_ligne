import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { CandidatService } from '../candidat.service';
import { CompetenceService } from '../competence.service';

@Component({
  selector: 'app-myresumecv',
  templateUrl: './myresumecv.component.html',
  styleUrls: ['./myresumecv.component.css']
})
export class MyresumecvComponent implements OnInit {

  i:number=1
  id=JSON.parse(localStorage.getItem("id")!)
  username=JSON.parse(localStorage.getItem("username")!)
competenceform:any
  cand:any
  listecandidat:any
  closeResult = '';
  listecompetence:any
  p: number = 1;

  constructor(private modalService: NgbModal,private activeroute:ActivatedRoute, private candidatservice:CandidatService,private competenceservice:CompetenceService ,private formbuilder:FormBuilder,private route:Router) { }
  

  ngOnInit(): void {
    this.competenceform=this.formbuilder.group({
      id:['',Validators.required],
      etude:['',Validators.required],
      experience:['',Validators.required],
      language:['',Validators.required]
    })
    console.log("id",this.id)

    this.detailcandidat()
  }
  detailcandidat(){
    this.candidatservice.getonecandidat(this.id).subscribe((res:any)=>{
      this.cand=res
    console.log("detailcandidat",this.cand)  
    }
    )
  }
  getallcompetence(){
    this.competenceservice.getallcompetence().subscribe((res:any)=>{
      this.listecompetence=res;
      console.log("responce",this.listecompetence)
    })
      }

  addcompetence(){
    this.competenceservice.addcompetence(this.competenceform.value,this.id).subscribe((res:any)=>
    {
      console.log("reponse",res)
      Swal.fire({
        icon: 'success',
        title: 'Welcome '+res.id,
        imageUrl:'https://cdn1.vectorstock.com/i/thumb-large/57/10/ta-da-emoticon-vector-21205710.jpg',
        imageWidth: 238,
        imageHeight: 250,
       
      })

})
  }
  open(content:any,competence:any) {
    this.competenceservice.getallcompetence().subscribe((res:any)=>{
      this.listecompetence=res.filter((el:any)=>el.candidat.id==this.id)
      console.log("responce",this.listecompetence)
      console.log("res",this.listecompetence)    
     } )
    
    
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
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

    deletecompetence(id:any){
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
      this.competenceservice.deletecompetence(id).subscribe((res:any)=>{
        console.log("responce",res)
        
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.getallcompetence()
      })
        }
  
  
  })}
  updatecompetence(){
    this.competenceservice.updatecompetence(this.competenceform.value,this.competenceform.value.id).subscribe((res:any)=>
    {
  this.getallcompetence()
  
    })
  }

  openup(content:any,competence:any) {
    this.competenceform.patchValue({
      etude:competence.etude,
      experience:competence.experience,
      language:competence.language
    })
    
    
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        },
      );
    }
    
  
}
