import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatComponent } from '../candidat/candidat.component';
import { ChangepasswordcandidatComponent } from '../changepasswordcandidat/changepasswordcandidat.component';
import { ChangepasswordentrepriseComponent } from '../changepasswordentreprise/changepasswordentreprise.component';
import { LayoutComponent } from '../component/layout/layout.component';
import { CvComponent } from '../cv/cv.component';
import { CventrepriseComponent } from '../cventreprise/cventreprise.component';
import { DetailcandidatComponent } from '../detailcandidat/detailcandidat.component';
import { DetailentrepriseComponent } from '../detailentreprise/detailentreprise.component';
import { DetailoffreComponent } from '../detailoffre/detailoffre.component';
import { EntrepriseComponent } from '../entreprise/entreprise.component';
import { ForgetpasswordComponent } from '../forgetpassword/forgetpassword.component';
import { ListcandidatComponent } from '../listcandidat/listcandidat.component';
import { ListcandidatnormalComponent } from '../listcandidatnormal/listcandidatnormal.component';
import { ListecandidatureComponent } from '../listecandidature/listecandidature.component';
import { ListeentreprisecandidatComponent } from '../listeentreprisecandidat/listeentreprisecandidat.component';
import { ListeoffrecandidatComponent } from '../listeoffrecandidat/listeoffrecandidat.component';
import { ListoffreComponent } from '../listoffre/listoffre.component';
import { LoginComponent } from '../login/login.component';
import { MyresumecvComponent } from '../myresumecv/myresumecv.component';
import { OffreComponent } from '../offre/offre.component';
import { PageacceuilComponent } from '../pageacceuil/pageacceuil.component';
import { RegistreComponent } from '../registre/registre.component';
import { ResetpasswordComponent } from '../resetpassword/resetpassword.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path:'', component: HomeComponent,children:[
  {path: '',component:LayoutComponent},
  {path: 'registre',component:RegistreComponent},
  {path: 'offre',component:OffreComponent},
  {path: 'login',component:LoginComponent},
  {path: 'detailcandidat',component:DetailcandidatComponent},
  {path: 'detailentreprise',component:DetailentrepriseComponent},
  {path: 'listcandidat',component:ListcandidatComponent},
  {path: 'entreprise',component:EntrepriseComponent},
  {path: 'detailoffre/:id',component:DetailoffreComponent},
  {path: 'listoffre',component:ListoffreComponent},
  {path: 'listecandidature',component:ListecandidatureComponent},
  {path: 'changepasswordentreprise',component:ChangepasswordentrepriseComponent},
  {path: 'candidat',component:CandidatComponent},
  {path: 'changepasswordcandidat',component:ChangepasswordcandidatComponent},
  {path: 'listeoffrecandidat',component:ListeoffrecandidatComponent},
  {path:'myresumecv',component:MyresumecvComponent},
  {path:'cv',component:CvComponent},
  {path:'cventreprise/:id',component:CventrepriseComponent},
  {path:'listentreprisecandidat',component:ListeentreprisecandidatComponent},
  {path:'listcandidatnormal',component:ListcandidatnormalComponent},
  {path:'forgetpassword',component:ForgetpasswordComponent},
  {path:'savePassword/:resettoken',component:ResetpasswordComponent}

]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
