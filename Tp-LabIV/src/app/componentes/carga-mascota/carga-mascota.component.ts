import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/clases/mascota';
import { isNull } from 'util';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-carga-mascota',
  templateUrl: './carga-mascota.component.html',
  styleUrls: ['./carga-mascota.component.css']
})
export class CargaMascotaComponent implements OnInit {
  
  name:string;
  url:string;
  tipo:string;
 /*listaMascotas:Array<Mascota>=[];*/

  constructor(private storage:StorageService) { }

  ngOnInit(): void {
    console.log(this.storage.BringMascota());
    this.name="";
    this.url="";
    this.tipo="";
  }

/*  public Enviar():void
  {
    this.listaMascotas.push(new Mascota(this.name, this.tipo, this.url));
  }*/

  public CargarMascota():void{
    
    let mascotita = new Mascota(this.name, this.tipo, this.url);
    
    this.storage.SaveMascota(mascotita);
    console.log(mascotita);
  }
}
