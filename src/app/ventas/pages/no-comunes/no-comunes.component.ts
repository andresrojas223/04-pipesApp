import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{

  nombre:string = "Susana"
  genero: string = "femenino"


  

  invitacionMapa = {

    "masculino": "invitarlo",
    "femenino":  "invitarla" 

  }

  clientes: string[] = ["Maria", "Jose","Fernando", "Camilo"]



  clientesMapa= {
    "=0": "no tenemos ningun cliente esperando",
    "=1": "tenemos un cliente esperando",
    "=2": "tenemos 2 clientes esperando",
    "other": "tenemos # clientes esperando" 


  
  }




  cambiarNombre(){

     this.nombre = "Fernando"
     this.genero = "masculino "

  }





  borrarCliente(){
     
    console.log(this.clientes)
    
     this.clientes.pop()

  }



   persona = {

     nombre: "Fernando",
     edad: 35,
     direccion: "Otawwa"
     


   }


   heroes=[

     {

      heroe: "Superman",
      vuela: true
        
     },

     {

      heroe: "Spiderman",
      vuela: false
        
     },
     {

      heroe: "Linterna Verde",
      vuela: true
        
     }
 

   ]



   miObservable = interval(1000)

   valorPromesa = new Promise( (resolve, reject) => {

   setTimeout(() => {
     resolve("Tenemos data de la promesa"); 

   }, 3500);


   } )

}
