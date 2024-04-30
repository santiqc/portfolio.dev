import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import CustomSectionComponent from '../../pages/section-component.component';
import { SocialPillComponent } from '../../icons/SocialPill.component';
import { MailIconComponent } from '../../icons/MailIcon.component';
import { LinkedInIconComponent } from '../../icons/LinkedInIcon.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    SocialPillComponent,
    MailIconComponent,
    LinkedInIconComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
 }
