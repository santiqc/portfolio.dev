import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostBinding, OnInit, Output, } from '@angular/core';
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
  currentSection: string = '';
  theme!: string;
  themeKey!: string;


  constructor(private themeService: ThemeModeService, private scrollService: ScrollService, private cdr: ChangeDetectorRef) {

    this.themeService.theme.asObservable().subscribe(theme => {
      this.theme = theme.value;
      this.themeKey = theme.key;
    });
    this.scrollService.sectionId$.subscribe(id => {
      this.currentSection = id;
    });
    window.addEventListener('scroll', () => {
      this.detectVisibleSection();
    });
  }

  detectVisibleSection() {
    const sections = ['experience-section', 'projects-section', 'about-me-section'];
    const windowHeight = window.innerHeight;

    let sectionInView = false;

    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionRect = section.getBoundingClientRect();
        const sectionTopRelativeToViewport = sectionRect.top;

        if (sectionTopRelativeToViewport >= 0 && sectionTopRelativeToViewport <= windowHeight * 0.8) {
          this.currentSection = sectionId;
          sectionInView = true;
          break;
        }
      }
    }

    if (!sectionInView) {
      this.currentSection = '';
    }

    this.cdr.detectChanges();
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
  }

  handleClick(item: any): void {
    if (item.url.startsWith('mailto:')) {
      window.location.href = item.url;
    } else {
      this.scrollToSection(item.url);
    }
  }

}
