import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mascota } from 'src/app/clases/mascota';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  /*@Input() mascota:Mascota;
  @Output() showDetail= new EventEmitter<any>();*/
  listaMascotas:Array<Mascota>=[];
  
  constructor(private storage:StorageService) { }

  ngOnInit(): void {
    this.listaMascotas=this.storage.BringMascota();
  }
  /*public emitDetail(){
    this.showDetail.emit();
  }*/
}
