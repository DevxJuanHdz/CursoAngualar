import { Component } from '@angular/core';
import { PersonaComponent } from '../persona/persona.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [PersonaComponent, FormsModule],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent {
  deshabilitar = false;
  //Mensaje que saldra por default
  mensaje = 'No se ha agregado ninguna persona';
  //Ejercicio Two Binding ---> Si escribimos dentro de '' se carga por default en el input texto parecido al event binding
  titulo = '';


  //Metodo agregarPersona()
  agregarPersona(){
    //Mensaje que saldra dar click al boton
    this.mensaje = 'Persona agregada'
  }
  /*
  //Metodo modificarTitulo()
  modificarTitulo(event: Event){
    this.titulo = (<HTMLInputElement>event.target).value
  }
  */
}
