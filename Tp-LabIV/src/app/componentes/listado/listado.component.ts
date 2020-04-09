import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mascota } from 'src/app/clases/mascota';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  @Input() mascota:Mascota;
  @Output() showDetail= new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  public emitDetail(){
    this.showDetail.emit();
  }

}
