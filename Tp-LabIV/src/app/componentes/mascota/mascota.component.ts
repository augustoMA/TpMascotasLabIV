import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mascota } from 'src/app/clases/mascota';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {

  @Input() mascota:Mascota
  @Input() mascotaIndex: string;
  @Output() activateDetail = new EventEmitter<any>();
  
  constructor(private router:Router, private storage:StorageService) { }

  ngOnInit(): void {
    console.log(this.mascota);
  }

  public showDetail(){
    this.router.navigate(["detalle/"+this.mascotaIndex]);
  }
}
