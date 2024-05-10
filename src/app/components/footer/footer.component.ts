import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollService } from '../services/ScrollService.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  currentYear = new Date().getFullYear()
  url: string = "about-me-section";
  constructor(private scrollService: ScrollService) {

  }

  handleClick(sectionId: string): void {
    this.scrollService.emitSectionId(sectionId);
  }
}
