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
  titulo = '';


  //Metodo agregarPersona()
  agregarPersona(){
    //Mensaje que saldra dar click al boton
    this.mensaje = 'Persona agregada'
  }

  //Metodo modificarTitulo()
  modificarTitulo(event: Event){
    //Para aceder al valor declaramos lo siguiente-->target hace referencia al elemento "input" y se hace un CAST par acceder al valor del elemento realizado una conversion
    this.titulo = (<HTMLInputElement>event.target).value

    /*
      Funcionamiento:
      1) Se obtiene el valor del input de texto y lo guardamos en la variable titulo
      2) Desplegamos el nuevo valor con interpolacion y se muestra el valor de la variable titulo
      3) Asi que conforme se va escribiendo vamos llamando al metodo "modificarTitulo" 
    */
  }

}
