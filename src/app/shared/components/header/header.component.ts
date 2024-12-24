import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProfileSectionComponent } from '../profile-section/profile-section.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProfileSectionComponent,NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor() {}
  ngOnInit() {
    console.log('HeaderComponent initialized');
  }
  logo: string = 'images/applogo.jpg';
}
