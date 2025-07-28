import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Presentation } from "./components/exo1/exo1";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Presentation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Exo1');
}
