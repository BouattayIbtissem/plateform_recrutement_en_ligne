import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidatService } from '../candidat.service';
import { CompetenceService } from '../competence.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-cventreprise',
  templateUrl: './cventreprise.component.html',
  styleUrls: ['./cventreprise.component.css']
})
export class CventrepriseComponent implements OnInit {

  i:number=1
  id=this.activeroute.snapshot.params["id"]
  p: number = 2;
listecompetence:any
  cand:any
  comp:any
  listecandidat:any

  constructor(private activeroute:ActivatedRoute, private candidatservice:CandidatService,private competenceservice:CompetenceService) { }
  

  ngOnInit(): void {
    console.log("id",this.id)
  
    this.detailcandidat()
    this.detailcompetence()
   this.getallcompetence()
   this.getallcandidat()
  }
  detailcandidat(){
    this.candidatservice.getonecandidat(this.id).subscribe((res:any)=>{
      this.cand=res
    console.log("detailcandidat",this.cand)  
    }
    )
  }
  detailcompetence(){
    this.competenceservice.getonecompetence(this.id).subscribe((res:any)=>{
      this.comp=res
    console.log("detailcandidat",this.comp)  
    }
    )
  }
  getallcompetence(){
    this.competenceservice.getallcompetence().subscribe((res:any)=>{
      this.listecompetence=res;
      console.log("responce",this.listecompetence)
    })
      }
      getallcandidat(){
        this.candidatservice.getallcandidat().subscribe((res:any)=>{
    this.listecandidat=res
    console.log("liste listecandidat",res)
    
        })
      }
  public openPDF(): void {
        let DATA: any = document.getElementById('htmlData');
        html2canvas(DATA).then((canvas) => {
          let fileWidth = 208;
          let fileHeight = (canvas.height * fileWidth) / canvas.width;
          const FILEURI = canvas.toDataURL('image/png');
          let PDF = new jsPDF('p', 'mm', 'a4');
          let position = 0;
          PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
          PDF.save('facture.pdf');
        });
      }
}
