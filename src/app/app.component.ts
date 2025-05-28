import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FromDrivenComponent } from "./from-driven/from-driven.component";
import { FormsModule } from '@angular/forms';
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FromDrivenComponent, FormsModule, ReactiveFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'week-2';
}
