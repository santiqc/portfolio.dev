import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AngularIconComponent } from '../../icons/AngularIcon.component';
import { JavaIconComponent } from '../../icons/JavaIcon.component';
import { SpringIconComponent } from '../../icons/SpringIcon.component';
import { MySqlIconComponent } from '../../icons/MySqlIcon.component';
import { PostgreSQLIconComponent } from '../../icons/PostgreSQLIcon.component';

@Component({
  selector: 'app-work-pile',
  standalone: true,
  imports: [
    CommonModule,
    AngularIconComponent,
    JavaIconComponent,
    SpringIconComponent,
    MySqlIconComponent,
    PostgreSQLIconComponent
  ],
  templateUrl: './work-pile.component.html',
  styleUrl: './work-pile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkPileComponent {

  classIcons:string = 'size-[30px] dark:text-emerald-300 text-zinc-700 duration-200 dark:hover:text-inherit hover:text-zinc-700/70';
}
