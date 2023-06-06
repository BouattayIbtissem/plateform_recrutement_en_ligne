import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidatService } from '../candidat.service';

@Component({
  selector: 'app-detailcandidat',
  templateUrl: './detailcandidat.component.html',
  styleUrls: ['./detailcandidat.component.css']
})
export class DetailcandidatComponent implements OnInit {
  i:number=1
  id=JSON.parse(localStorage.getItem("id")!)

  cand:any


  constructor(private activeroute:ActivatedRoute, private candidatservice:CandidatService) { }
  

  ngOnInit(): void {
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

}
