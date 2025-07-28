import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Presentation } from "./components/exo1/exo1";
import { Navbar } from "./components/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Presentation, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('navbar');
}
