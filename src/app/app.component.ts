import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppLayoutComponent],
  template: `
    <app-app-layout> </app-app-layout>
    <router-outlet />
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio-angular';
}
