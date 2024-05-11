import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent {
  
  //NOTA: La interpolacion se refiere al uso de texto dinamico en las plantillas HTML

  nombre: string = 'Juan';
  apellido: string = 'Perez';
  edad: number = 28;
  //Ejemplo de un atributo privado
  //private edad: number = 28;
  
  //Declaramos un metodo
  /*
  getEdad():number{
    return this.edad;
  }*/
} 
