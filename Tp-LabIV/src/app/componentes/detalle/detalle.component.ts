import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/clases/mascota';
import { StorageService } from 'src/app/services/storage.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  public mascota:Mascota;

  constructor(private storage:StorageService, private route:ActivatedRoute, private location:Location) { } 

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.mascota=this.storage.BringMascotaId(parseInt(params.get("idMascota")));
    });
    console.log(this.mascota);
  }
  GoBack(){
    this.location.back();
  }
}
