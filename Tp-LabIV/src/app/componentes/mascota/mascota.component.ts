import { Component, OnInit, Input } from '@angular/core';
import { Mascota } from 'src/app/clases/mascota';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {

  @Input() mascota:Mascota
  detailState:boolean=false;
  
  constructor() { }

  ngOnInit(): void {
  }

  public showDetail(event){
    this.detailState= true;
  }
}
