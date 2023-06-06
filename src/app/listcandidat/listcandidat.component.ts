import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CandidatService } from '../candidat.service';


@Component({
  selector: 'app-listcandidat',
  templateUrl: './listcandidat.component.html',
  styleUrls: ['./listcandidat.component.css']
})
export class ListcandidatComponent implements OnInit {
  listcandidat:any
  search_name:any
  search_address:any
  p: number = 1;
  pageOfItems: Array<any>;
 
  page = 1;
  count = 0;
  pageSize =2;
  pageSizes = [3, 6, 9];
  constructor(private candidatservice:CandidatService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getallcandidat()
  }

  getallcandidat(){
    this.candidatservice.getallcandidat().subscribe((res:any)=>{
    this.listcandidat=res;
    console.log("res",this.listcandidat)    
   } )

  }
  filtrageaddress(event:any){
    this.candidatservice.getallcandidat().subscribe((res:any)=>{
      this.listcandidat=res.filter((el:any)=>el.address==event.target.value)
  }) 
  console.log(this.listcandidat) 
  }
  filtrageniveau(event:any){
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
