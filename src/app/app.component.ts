import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeModeService } from './components/service/ThemeMode.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio.dev';
  service = inject(ThemeModeService);
  theme!: string;

  constructor() {
    console.log(`getValue: ${this.service.theme.getValue()}`);
    console.log(`Value: ${this.service.theme.value}`);


    this.service.theme.asObservable().subscribe(theme => {
      this.theme = theme!.value;
    });
  }
}
