import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { HomeComponent } from './componentes/home/home.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { IndividualComponent } from './componentes/individual/individual.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'formulario',
    component: FormularioComponent
  },
  {
    path: 'proyectos',
    component: ProyectosComponent
  },
  {
    path: 'individual/:id',
    component: IndividualComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
