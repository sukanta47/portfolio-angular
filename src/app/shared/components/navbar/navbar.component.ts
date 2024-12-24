import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  logo: boolean = true;
  navItems = [
    { name: 'Home', icon: 'fas fa-home', link: '/home' },
    { name: 'Profile', icon: 'fas fa-user', link: '/profile' },
    
    { name: 'Contact', icon: 'fas fa-envelope', link: '/contact' },
    { name: 'Settings', icon: 'fas fa-cog', link: '/settings' }
  ];

  onhoverAction(e: any) {
    console.log('hovered', e);
  }
}
