import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower:string = "Fernando"
  nombreLipper:string = "FERNANDO"
  nombrecompleto:string = "FeRnAnDo RoJas"


  fecha: Date = new Date();


}
