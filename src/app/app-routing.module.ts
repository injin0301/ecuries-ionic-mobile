import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'installations',
    loadChildren: () => import('./pages/installations/installations.module').then( m => m.InstallationsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'equipe',
    loadChildren: () => import('./pages/equipe/equipe.module').then( m => m.EquipePageModule)
  },
  {
    path: 'enseignement',
    loadChildren: () => import('./pages/enseignement/enseignement.module').then( m => m.EnseignementPageModule)
  },
  {
    path: 'formulesettarifs',
    loadChildren: () => import('./pages/formules-tarifs/formules-tarifs-body/formules-tarifs-body.module').then( m => m.FormulesTarifsBodyPageModule)
  },
  {
    path: 'stages',
    loadChildren: () => import('./pages/stages/stages/stages.module').then( m => m.StagesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
