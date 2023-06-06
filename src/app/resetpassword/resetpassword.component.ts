import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  
  resetform:FormGroup
  resettoken=this.activeroute.snapshot.params["resettoken"]
  constructor(private activeroute:ActivatedRoute,private formbuilder:FormBuilder,private authentificationservice:AuthentificationService) { }

  ngOnInit(): void {
    this.resetform = this.formbuilder.group({
      newpassword: ['', Validators.required],

    })
  }
  reset(){
    this.authentificationservice.reset(this.resetform.value.newpassword,this.resettoken).subscribe(
      (res: any) => {
        console.log(res)
  })
}
}
