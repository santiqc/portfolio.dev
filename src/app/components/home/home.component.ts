import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, OnDestroy, ViewChild, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ThemeModeService } from '../service/ThemeMode.service';
import { FooterComponent } from '../footer/footer.component';
import { LayoutComponent } from '../layout/component/layout.component';
import { WorkPileComponent } from '../layout/work-pile/work-pile.component';
import CustomSectionComponent from '../pages/section-component.component';
import { ExperiencieComponent } from '../experiencie/experiencie.component';
import { ProjectsComponent } from '../projects/Projects.component';
import { AboutMeComponent } from '../aboutMe/aboutMe.component';
import { Subscription } from 'rxjs';
import { ScrollService } from '../services/ScrollService.service';

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
    ExperiencieComponent,
    ProjectsComponent,
    AboutMeComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent implements OnDestroy {

  title = 'portfolio.dev';
  service = inject(ThemeModeService);
  theme!: string;

  private subscription: Subscription;

  @HostBinding('class.dark') get mode() {
    return (this.theme == 'dark');
  }

  constructor(private scrollService: ScrollService) {
    this.service.theme.asObservable().subscribe(theme => {
      this.theme = theme!.value;

    });
    this.subscription = this.scrollService.sectionId$.subscribe(id => {
      this.scrollToSection(id);
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
