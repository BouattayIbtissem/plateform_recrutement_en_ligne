import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidatService } from '../candidat.service';

@Component({
  selector: 'app-changepasswordcandidat',
  templateUrl: './changepasswordcandidat.component.html',
  styleUrls: ['./changepasswordcandidat.component.css']
})
export class ChangepasswordcandidatComponent implements OnInit {
  i:number=1
  id=JSON.parse(localStorage.getItem("id")!)
  p: number = 2;
listecompetence:any
  cand:any
  comp:any

  constructor(private activeroute:ActivatedRoute, private candidatservice:CandidatService) { }

  ngOnInit(): void {
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
