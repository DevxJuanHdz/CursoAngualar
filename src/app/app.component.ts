import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonaComponent } from './components/persona/persona.component';
import { PersonasComponent } from './components/personas/personas.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonaComponent, PersonasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mi primera app en Angular';
}
