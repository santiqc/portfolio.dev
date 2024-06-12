
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BriefcaseIconComponent } from '../icons/BriefcaseIcon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiencie',
  standalone: true,
  imports: [
    CommonModule,
    BriefcaseIconComponent
  ],
  templateUrl: './experiencie.component.html',
  styleUrl: './experiencie.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperiencieComponent {

  EXPERIENCIE = [
    {
      date: "Mayo 2024 - Actualmente...",
      title: "Desarrollador Backend",
      company: "LinkTic, Remoto",
      description:
        "POSITIVA (Aplicativo de seguros): Análisis, desarrollo e implementación de " +
        "nuevas características de un aplicativo web, el cual implementa servicios para " +
        "la parte backend en el lenguaje Java usando Spring Boot, y Frontend con " +
        "Vue.js.Implementa tecnologías como Liquibase, Maven, base de datos " +
        "PostgreSQL, y Spring Security. Es un aplicativo para el manejo, control y " +
        "seguimiento de procesos de documentación, tramites, quejas.",
      link: "",
    },
    {
      date: "Abril 2024 - Actualmente...",
      title: "Desarrollador FullStack Freelance",
      company: "FREELANCE, Remoto",
      description:
        "Formo parte de un proyecto en un banco para España donde me encargo del " +
        "mantenimiento y desarrollo de nuevas características, así como la gestión de " +
        "la base de datos. Utilizamos Spring Boot para el backend, Angular para el " +
        "para la parte backend también se implementa la arquitectura de " +
        "frontend, Oracle como base de datos y Jenkins como servidor. Para el control " +
        "de versiones, empleamos GitLab",
      link: "",
    },
    {
      date: "Agosto 2023 - Febrero 2024",
      title: "Freelance FullStack Developer",
      company: "MEDRAR, Remoto",
      description:
        "Titularizadora colombiana: En este proyecto me involucre en el desarrollo y " +
        "migración de código desarrollado con JEE a tecnologías mas actuales como " +
        "SpringBoot y Angular, se trabaja bajo una arquitectura separada por capas " +
        "para la parte backend también se implementa la arquitectura de " +
        "microservicios con SpringCloud y la parte Front se desarrolla mediante",
      link: "",
    },
    {
      date: "Octubre 2022 - Agosto 2023",
      title: "Desarrollador FullStack Jr",
      company: "GO-DIGITAL, Remoto",
      description:
        "Desarrollo y mantenimiento de módulos en sistemas diversos, " +
        "implementación de nuevas características, scripts para actualización de " +
        "datos, gestión de bases de datos en Firebase, creación de componentes con " +
        "Angular, soporte a aplicaciones existentes con Angular.js, desarrollo de " +
        "aplicaciones móviles con Ionic. Utilización de Node.js, TypeScript, Express.js " +
        "para el backend, gestión de roles y autenticación de usuarios, análisis de " +
        "requisitos bajo metodologías ágiles como Scrum. Creación de demos con " +
        "AWS Lambdas, Flutter para páginas web, Python y Java para funciones " +
        "Lambdas, y documentación correspondiente",
      link: "",
    }
  ]
}
