import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './website/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Главная'
  },
  {
    path: 'patient',
    loadChildren: () => import('./website/modules/patient/patient.module').then(m => m.PatientModule)
  },
  {
    path: '**',
    component: HomeComponent,
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
