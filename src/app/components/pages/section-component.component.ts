import { CommonModule } from '@angular/common';
import { Component, Input, } from '@angular/core';


@Component({
  selector: 'app-custom-section',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <section [id]="id" [attr.data-section]="id" class="section {{className}} scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
    <ng-content></ng-content>
  </section>
`,
  styles: []

})
export default class CustomSectionComponent {
  @Input() id?: string;
  @Input('class') className?: string;


}
