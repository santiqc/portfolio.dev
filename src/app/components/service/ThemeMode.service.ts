import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeModeService {
  private darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  theme = new BehaviorSubject<{ key: string, value: string }>(this.getThemeFromLocalStorage());

  constructor() {
    this.watchThemeChanges();
  }

  private watchThemeChanges(): void {
    this.darkModeMediaQuery.addEventListener('change', () => {
      const newTheme = this.darkModeMediaQuery.matches ? 'dark' : 'light';
      localStorage.removeItem('theme');

      localStorage.setItem('system', newTheme);
      this.theme.next({ key: 'system', value: newTheme });
    });
  }
  
  private getThemeFromLocalStorage(): { key: string, value: string } {
    const systemTheme = this.darkModeMediaQuery.matches ? 'dark' : 'light';
    const theme = localStorage.getItem('theme');
    if (theme !== null) {
      return { key: 'theme', value: systemTheme };
    } else {
      return { key: 'system', value: systemTheme };
    }
  }

  updateTheme(newTheme: string): void {
    if (newTheme === 'system') {
      localStorage.removeItem('theme');
      const systemTheme = this.darkModeMediaQuery.matches ? 'dark' : 'light';
      localStorage.setItem('system', systemTheme);
      this.theme.next({ key: 'system', value: systemTheme });
    } else {
      localStorage.removeItem('system');
      localStorage.setItem('theme', newTheme);
      this.theme.next({ key: 'theme', value: newTheme });
    }
  }

}
