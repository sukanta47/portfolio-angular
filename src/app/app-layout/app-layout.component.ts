import { Component } from '@angular/core';
import { SocialMediaLinksComponent } from '../shared/components/social-media-links/social-media-links.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { DashboardComponent } from '../features/dashboard/dashboard.component';

@Component({
  selector: 'app-app-layout',
  standalone: true,
  imports: [SocialMediaLinksComponent, HeaderComponent, FooterComponent, DashboardComponent],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss'
})
export class AppLayoutComponent {

}
