import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';
import { CandidatService } from '../candidat.service';
import { CompetenceService } from '../competence.service';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  i:number=1
  id=JSON.parse(localStorage.getItem("id")!)
  p: number = 2;
listecompetence:any
  cand:any
  comp:any
  c:any


  constructor(private activeroute:ActivatedRoute, private candidatservice:CandidatService,private competenceservice:CompetenceService) { }
  

  ngOnInit(): void {
    console.log("id",this.id)
  
    this.detailcandidat()
    this.detailcompetence()
   this.getallcompetence()
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
      this.listecompetence=res.filter((el:any)=>el.candidat.id==this.id)
      console.log("responce",this.listecompetence)
      
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
