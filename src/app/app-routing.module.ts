import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, { path: 'entreprise', loadChildren: () => import('./entreprise/entreprise.module').then(m => m.EntrepriseModule) },
 { path: 'candidat', loadChildren: () => import('./candidat/candidat.module').then(m => m.CandidatModule) },
  { path: 'registre', loadChildren: () => import('./registre/registre.module').then(m => m.RegistreModule) }, { path: 'offre', loadChildren: () => import('./offre/offre.module').then(m => m.OffreModule) }, { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, { path: 'detailcandidat', loadChildren: () => import('./detailcandidat/detailcandidat.module').then(m => m.DetailcandidatModule) }, { path: 'detailentreprise', loadChildren: () => import('./detailentreprise/detailentreprise.module').then(m => m.DetailentrepriseModule) }, { path: 'listcandidat', loadChildren: () => import('./listcandidat/listcandidat.module').then(m => m.ListcandidatModule) },
 { path: 'listcandidatnormal', loadChildren: () => import('./listcandidatnormal/listcandidatnormal.module').then(m => m.ListcandidatnormalModule) },
 { path: 'listoffre', loadChildren: () => import('./listoffre/listoffre.module').then(m => m.ListoffreModule) },
 { path: 'detailoffre', loadChildren: () => import('./detailoffre/detailoffre.module').then(m => m.DetailoffreModule) },
 { path: 'changepasswordentreprise', loadChildren: () => import('./changepasswordentreprise/changepasswordentreprise.module').then(m => m.ChangepasswordentrepriseModule) },
 { path: 'listecandidature', loadChildren: () => import('./listecandidature/listecandidature.module').then(m => m.ListecandidatureModule) },
 { path: 'changepasswordcandidat', loadChildren: () => import('./changepasswordcandidat/changepasswordcandidat.module').then(m => m.ChangepasswordcandidatModule) },
 { path: 'listeoffrecandidat', loadChildren: () => import('./listeoffrecandidat/listeoffrecandidat.module').then(m => m.ListeoffrecandidatModule) },
 { path: 'listecandidaturecandidat', loadChildren: () => import('./listecandidaturecandidat/listecandidaturecandidat.module').then(m => m.ListecandidaturecandidatModule) },
 { path: 'listeentreprisecandidat', loadChildren: () => import('./listeentreprisecandidat/listeentreprisecandidat.module').then(m => m.ListeentreprisecandidatModule) },
 { path: 'myresumecv', loadChildren: () => import('./myresumecv/myresumecv.module').then(m => m.MyresumecvModule) },
 { path: 'cv', loadChildren: () => import('./cv/cv.module').then(m => m.CvModule) },
 { path: 'cventreprise', loadChildren: () => import('./cventreprise/cventreprise.module').then(m => m.CventrepriseModule) },
 { path: 'forgetpassword', loadChildren: () => import('./forgetpassword/forgetpassword.module').then(m => m.ForgetpasswordModule) },
 { path: 'savePassword', loadChildren: () => import('./resetpassword/resetpassword.module').then(m => m.ResetpasswordModule) },
 { path: 'pageacceuil', loadChildren: () => import('./pageacceuil/pageacceuil.module').then(m => m.PageacceuilModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
