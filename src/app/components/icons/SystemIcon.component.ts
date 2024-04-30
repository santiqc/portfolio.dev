import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-system-icon',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
          <svg
        [class]="class"
        [id]="id"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"/>
      <path d="M7 20h10"/>
      <path d="M9 16v4"/>
      <path d="M15 16v4"/>
    </svg>`,
})
export class SystemIconComponent {
  @Input() id: String = '';
  @Input() class: String = '';
}