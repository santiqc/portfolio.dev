import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProfileCheckIconComponent } from '../icons/ProfileCheckIcon.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    CommonModule,
    ProfileCheckIconComponent
  ],
  templateUrl: './aboutMe.component.html',
  styleUrl: './aboutMe.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMeComponent { }
