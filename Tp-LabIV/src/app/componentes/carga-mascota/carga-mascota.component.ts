import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/clases/mascota';


@Component({
  selector: 'app-carga-mascota',
  templateUrl: './carga-mascota.component.html',
  styleUrls: ['./carga-mascota.component.css']
})
export class CargaMascotaComponent implements OnInit {
  
  name:string;
  url:string;
  tipo:string;
  listaMascotas:Array<Mascota>=[];

  constructor() { }

  ngOnInit(): void {
    this.name="";
    this.url="";
    this.tipo="";
  }

  public Enviar():void
  {
    this.listaMascotas.push(new Mascota(this.name, this.tipo, this.url));
  }
}
