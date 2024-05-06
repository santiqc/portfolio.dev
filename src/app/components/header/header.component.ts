import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, } from '@angular/core';
import { SunIconComponent } from '../icons/SunIcon.component';
import { MoonIconComponent } from '../icons/MoonIcon.component';
import { SystemIconComponent } from '../icons/SystemIcon.component';
import { ThemeModeService } from '../service/ThemeMode.service';
import { ScrollService } from '../services/ScrollService.service';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    SunIconComponent,
    MoonIconComponent,
    SystemIconComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {

  navItems = [
    {
      title: "Experiencia",
      label: "experiencia",
      url: "experience-section",
    },
    {
      title: "Proyectos",
      label: "proyectos",
      url: "projects-section",
    },
    {
      title: "Sobre mí",
      label: "sobre-mi",
      url: "about-me-section",
    },
    {
      title: "Contacto",
      label: "contacto",
      url: "mailto:quintero28194@gmail.com",
    },
  ]
  isPopoverOpen = false;
  themeOptions = ['dark', 'light', 'system'];

  theme!: string;
  themeKey!: string;
  @Output() scrollToSectionEvent = new EventEmitter<string>();

  constructor(private themeService: ThemeModeService, private scrollService: ScrollService) {

    this.themeService.theme.asObservable().subscribe(theme => {
      this.theme = theme.value;
      this.themeKey = theme.key;
    });
  }

  scrollToSection(sectionId: string) {
    this.scrollService.emitSectionId(sectionId);
  }

  ngOnInit(): void {

  }

  handleThemeButton(item: string): void {
    this.themeService.updateTheme(item);
    this.isPopoverOpen = false;
  }

  togglePopover(): void {
    this.isPopoverOpen = !this.isPopoverOpen;
    console.log(this.isPopoverOpen, 'openchange');
  }

  handleClick(item: any): void {
    if (item.url.startsWith('mailto:')) {
      window.location.href = item.url;
    } else {
      this.scrollToSection(item.url);
    }
  }

}
