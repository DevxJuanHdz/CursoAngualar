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
  
  //Ejercicio: Property Binding
  //Prodiedad
  deshabilitar = true; //Es (true) o (false) dependiendo para activar o deshabilitar el boton
}
