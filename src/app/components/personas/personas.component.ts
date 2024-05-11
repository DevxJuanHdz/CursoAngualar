import { Component } from '@angular/core';
import { PersonaComponent } from '../persona/persona.component';

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [PersonaComponent],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent {
  deshabilitar = false;
  //Mensaje que saldra por default
  mensaje = 'No se ha agregado ninguna persona';
  //Metodo agregarPersona()
  agregarPersona(){
  //Mensaje que saldra dar click al boton
  this.mensaje = 'Persona agregada'
  }
}
