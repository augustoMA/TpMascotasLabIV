import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {  StorageService } from './services/storage.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CargaMascotaComponent } from './componentes/carga-mascota/carga-mascota.component';

import { FormsModule } from "@angular/forms";
import { MascotaComponent } from './componentes/mascota/mascota.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { HomeComponent } from './componentes/home/home.component';
import { ErrorComponent } from './componentes/error/error.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    CargaMascotaComponent,
    MascotaComponent,
    ListadoComponent,
    MenuComponent,
    HomeComponent,
    ErrorComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
