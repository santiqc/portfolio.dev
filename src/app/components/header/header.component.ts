import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, } from '@angular/core';
import { SunIconComponent } from '../icons/SunIcon.component';
import { MoonIconComponent } from '../icons/MoonIcon.component';
import { SystemIconComponent } from '../icons/SystemIcon.component';
import { ThemeModeService } from '../service/ThemeMode.service';



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
      url: "/#experiencia",
    },
    {
      title: "Proyectos",
      label: "proyectos",
      url: "/#proyectos",
    },
    {
      title: "Sobre mí",
      label: "sobre-mi",
      url: "/#sobre-mi",
    },
    {
      title: "Contacto",
      label: "contacto",
      url: "mailto:miduga@gmail.com",
    },
  ]
  isPopoverOpen = false;
  themeOptions = ['dark', 'light', 'system'];

  theme!: string;
  themeKey!: string;

  constructor(private themeService: ThemeModeService) {

    this.themeService.theme.asObservable().subscribe(theme => {
      this.theme = theme.value;
      this.themeKey = theme.key;
    });
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

}
