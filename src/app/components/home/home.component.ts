import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ThemeModeService } from '../service/ThemeMode.service';
import { FooterComponent } from '../footer/footer.component';
import { LayoutComponent } from '../layout/component/layout.component';
import { WorkPileComponent } from '../layout/work-pile/work-pile.component';
import CustomSectionComponent from '../pages/section-component.component';
import { ExperiencieComponent } from '../experiencie/experiencie.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    WorkPileComponent,
    CustomSectionComponent,
    ExperiencieComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {

  title = 'portfolio.dev';
  service = inject(ThemeModeService);
  theme!: string;

  constructor() {
    this.service.theme.asObservable().subscribe(theme => {
      this.theme = theme!.value;
    });
  }
}
