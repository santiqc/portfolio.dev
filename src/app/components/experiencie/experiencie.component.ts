
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
        "Participación activa en el análisis, desarrollo y mantenimiento de funcionalidades para aplicaciones web orientadas a la gestión documental, trámites, comunicaciones y PQRS.\n\n" +
        "En el proyecto POSITIVA (Gestor Documental), implementación de nuevas características utilizando Java con Spring Boot en el backend y Vue.js en el frontend, además de tecnologías como Liquibase, Maven, PostgreSQL y Spring Security.\n\n" +
        "En el proyecto ACUEDUCTO, desarrollo e integración de microservicios en módulos como radicación de correspondencia (web y presencial), gestión de envíos físicos/electrónicos certificados, asignación masiva, aprobación de comunicaciones, administración de consecutivos, conexión con sistemas externos (SAP, SIPOST, 472), y funcionalidades de Retención y Disposición.\n\n" +
        "Responsable de tareas de mantenimiento, refactorización, corrección de errores y mejoras de rendimiento. Contribución en servicios REST, integración con SendGrid y servicios propios de correo, implementación de flujos de aprobación, validaciones, trazabilidad mediante system logs y coordinación con el equipo para garantizar entregas efectivas.",
      link: "",
    },
    {
      date: "Abril 2024 - Julio 2024",
      title: "Desarrollador FullStack Freelance",
      company: "FREELANCE, Remoto",
      description:
        "Formo parte de un proyecto en un banco para España donde me encargo del mantenimiento y desarrollo de nuevas características, así como la gestión de la base de datos.\n\n" +
        "Utilizamos Spring Boot para el backend, Angular para el frontend, Oracle como base de datos y Jenkins como servidor de integración continua.\n\n" +
        "Para el control de versiones, empleamos GitLab.\n\n" +
        "También se implementa arquitectura en el backend basada en buenas prácticas.",
      link: "",
    },
    {
      date: "Agosto 2023 - Febrero 2024",
      title: "Freelance FullStack Developer",
      company: "MEDRAR, Remoto",
      description:
        "Titularizadora colombiana: En este proyecto me involucré en el desarrollo y migración de código desarrollado con JEE a tecnologías más actuales como Spring Boot y Angular.\n\n" +
        "Se trabaja bajo una arquitectura separada por capas en el backend, y también se implementa arquitectura de microservicios con Spring Cloud.\n\n" +
        "La parte frontend se desarrolla utilizando Angular.",
      link: "",
    },
    {
      date: "Octubre 2022 - Agosto 2023",
      title: "Desarrollador FullStack Jr",
      company: "GO-DIGITAL, Remoto",
      description:
        "Desarrollo y mantenimiento de módulos en sistemas diversos, implementación de nuevas características y scripts para actualización de datos.\n\n" +
        "Gestión de bases de datos en Firebase, creación de componentes con Angular y soporte a aplicaciones existentes con Angular.js.\n\n" +
        "Desarrollo de aplicaciones móviles con Ionic, utilización de Node.js, TypeScript y Express.js para el backend, así como gestión de roles y autenticación de usuarios.\n\n" +
        "Análisis de requisitos bajo metodologías ágiles como Scrum.\n\n" +
        "Creación de demos con AWS Lambdas, desarrollo web con Flutter, uso de Python y Java para funciones Lambdas, y documentación correspondiente.",
      link: "",
    }
  ]
}
