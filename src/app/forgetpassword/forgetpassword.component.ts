import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  
  forgetform:FormGroup
  constructor(private formbuilder:FormBuilder,private authentificationservice:AuthentificationService) { }

  ngOnInit(): void {
    this.forgetform = this.formbuilder.group({
      email: ['', Validators.required],

    })
  }
  forget(){
    this.authentificationservice.forget(this.forgetform.value.email).subscribe(
      (res: any) => {
        console.log(res)
  })
}

}
