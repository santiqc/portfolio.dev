import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Project, Tag } from '../interfaces/Tags';
import { JavaIconComponent } from '../icons/JavaIcon.component';
import { TailwindIconComponent } from '../icons/TailwindIcon.component';
import { CodeIconComponent } from '../icons/CodeIcon.component';
import { GitHubIconComponent } from '../icons/GitHubIcon.component';
import { LinkIconComponent } from '../icons/LinkIcon.component';

const TAGS: { [key: string]: Tag } = {
  JAVA: {
    name: "Java",
    class: "bg-black text-white",
    component: JavaIconComponent
  },
  TAILWIND: {
    name: "Tailwind",
    class: "bg-black text-white",
    component: TailwindIconComponent
  },
};

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    CommonModule,
    CodeIconComponent,
    TailwindIconComponent,
    GitHubIconComponent,
    LinkIconComponent
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent {
  PROJECTS: Project[] = [
    {
      title: "Proyecto próximamente...",
      description: "Estoy trabajando en nuevos proyectos. Pronto compartiré más detalles.",
      link: "",
      github: "",
      image: "assets/images/not-found.png",
      tags: [TAGS['JAVA'], TAGS['TAILWIND']],
    }
  ];
}
