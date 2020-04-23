import { Injectable } from '@angular/core';
import { Mascota } from '../clases/mascota';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public listaMascotas: Array<Mascota>=[];
  private listaKey = 'mascotas';

  constructor() { }

  public SaveMascota(mascota:Mascota):boolean{
    this.listaMascotas.push(mascota);
    localStorage.setItem(this.listaKey, JSON.stringify(this.listaMascotas));
    return true;
  }

  public BringMascota():Array<Mascota>{
    let mascotaUnParsed=localStorage.getItem(this.listaKey);
    
    if(!mascotaUnParsed)
    {
      return[];
    }
    else
    {
      let mascotaParsed = JSON.parse(mascotaUnParsed);
      this.listaMascotas=mascotaParsed;
      return mascotaParsed;
    }
  }

  public BringMascotaId(id:number):Mascota{
    let mascota = this.BringMascota();
    return mascota[id];
  }
}
