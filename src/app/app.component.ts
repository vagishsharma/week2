import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FromDrivenComponent } from "./from-driven/from-driven.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FromDrivenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'week-2';
}
