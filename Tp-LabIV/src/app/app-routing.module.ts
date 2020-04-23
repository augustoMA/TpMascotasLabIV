import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './componentes/listado/listado.component';
import { MascotaComponent } from './componentes/mascota/mascota.component';
import { CargaMascotaComponent } from './componentes/carga-mascota/carga-mascota.component';
import { HomeComponent } from './componentes/home/home.component';
import { ErrorComponent } from './componentes/error/error.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full',
},
  {
  path:'home',
  component:HomeComponent,
  children: [
    {
      path:'carga',
      component: CargaMascotaComponent
    },
  ],
},
{
  path:'listado',
  component:ListadoComponent
},
{
  path:'detalle',
  redirectTo: "home",
  pathMatch: "full",
},
{
  path: 'detalle/:idMascota',
  component: DetalleComponent,
},
{
  path:'**',
  component:ErrorComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
