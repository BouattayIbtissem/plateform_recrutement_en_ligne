import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {
  id=JSON.parse(localStorage.getItem("id")!)
  registreform:FormGroup
  registreformentre:FormGroup
  fileToUpload:Array<File>=[];
  p:any
  constructor(private formbuilder:FormBuilder, private authentificationservice:AuthentificationService,
    private activeroute:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.registreform=this.formbuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.required],
      name:['',Validators.required],
      dateofbirth:['',Validators.required],
      profile:['',Validators.required],
      address:['',Validators.required],
      role:['',Validators.required]
    })
    this.registreformentre=this.formbuilder.group({
      username :['',Validators.required],
      password :['',Validators.required],
      email :['',Validators.required],
      datedecreation :['',Validators.required],
      description  :['',Validators.required],
      siteweb :['',Validators.required],
      local :['',Validators.required],
      domaine :['',Validators.required],
      role :['',Validators.required]
    })
  }
  registrecandidat(){
    this.registreform.patchValue({role:["CANDIDAT"]})
    let formdata=new FormData();
    formdata.append("username",this.registreform.value.username);
    formdata.append("email",this.registreform.value.email);
    formdata.append("password",this.registreform.value.password);
    formdata.append("name",this.registreform.value.name);
    formdata.append("dateofbirth",this.registreform.value.dateofbirth);
    formdata.append("profile",this.registreform.value.profile);
    formdata.append("address",this.registreform.value.address);
    formdata.append("file",this.fileToUpload[0]);
    formdata.append("role",this.registreform.value.role);
    this.authentificationservice.signupcandidat(formdata).subscribe((res:any)=>
    {
    console.log("res",res)
    // this.route.navigateByUrl("/home")
    window.location.href="http://localhost:4200/login"
    })
  
    }
  
    registreentreprise(){
      this.registreformentre.patchValue({role:["ENTREPRISE"]})
      let formdataentr=new FormData();
      formdataentr.append("username",this.registreformentre.value.username);
      formdataentr.append("email",this.registreformentre.value.email);
      formdataentr.append("password",this.registreformentre.value.password);
      formdataentr.append("datedecreation",this.registreformentre.value.datedecreation);
      formdataentr.append("domaine",this.registreformentre.value.domaine);
      formdataentr.append("siteweb",this.registreformentre.value.siteweb);
      formdataentr.append("local",this.registreformentre.value.local);
      formdataentr.append("description",this.registreformentre.value.description);
      formdataentr.append("file",this.fileToUpload[0]);
      formdataentr.append("role",this.registreformentre.value.role);
      this.authentificationservice.signupentreprise(formdataentr).subscribe((res:any)=>
      {
      console.log("res",res)
      // this.route.navigateByUrl("/home/login")
      window.location.href="http://localhost:4200/login"
      })
    
      }
      handleFileInput(files: any){
        this.fileToUpload=<Array<File>>files.target.files;
        console.log(this.fileToUpload);
        }

      
}
