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
      title: "Desarrollador BackEnd SemiSenior",
      company: "LinkTic, Remoto",
      description: [
        "Desarrollo e integración de microservicios backend utilizando Java (Spring Boot, Spring Cloud, Spring Batch, Spring WebFlux) y JPA/Hibernate.",
        "Implementación de arquitecturas reactivas con Java Reactivo (Spring WebFlux) para mejorar la escalabilidad y eficiencia del sistema.",
        "Desarrollo de interfaces frontend con Angular y Vue.js, integradas mediante APIs RESTful.",
        "Gestión y optimización de bases de datos PostgreSQL, versionamiento de esquemas con Liquibase y mejora de rendimiento en consultas.",
        "Configuración de Spring Security, Keycloak y OAuth para autenticación, autorización y control de accesos.",
        "Implementación de mensajería asíncrona con Google Cloud Pub/Sub y ActiveMQ para comunicación entre servicios distribuidos.",
        "Automatización de infraestructura y despliegue de aplicaciones en la nube utilizando Terraform, AWS y Microsoft Azure.",
        "Contenerización y orquestación de servicios con Docker y Kubernetes, garantizando entornos portables y escalables.",
        "Diseño y ejecución de pruebas unitarias e integración con JUnit y Mockito, fortaleciendo la calidad del código.",
        "Monitoreo y control de calidad del software mediante Grafana y SonarQube.",
        "Implementación de soluciones de gestión documental y generación de reportes con Alfresco y JasperReports.",
        "Colaboración bajo metodologías ágiles (Scrum), promoviendo la mejora continua y la entrega de valor al negocio."
      ],
      link: "",
    },
    {
      date: "Abril 2024 - Julio 2024",
      title: "Desarrollador FullStack Freelance",
      company: "FREELANCE, Remoto",
      description: [
        "Desarrollo y mantenimiento de nuevas funcionalidades en una aplicación bancaria de gran escala.",
        "Implementación de microservicios backend con Java (Spring Boot) y microfrontends con Angular.",
        "Gestión y optimización de bases de datos Oracle, incluyendo consultas complejas, procedimientos y mantenimiento de esquemas.",
        "Diseño y ejecución de pruebas unitarias con JUnit y Mockito, garantizando la calidad y confiabilidad del código.",
        "Integración continua y automatización de despliegues mediante Jenkins.",
        "Control de versiones utilizando GitLab, SVN y SVS, asegurando trazabilidad y control de cambios.",
        "Participación en arquitecturas distribuidas desplegadas en nubes híbridas (AWS, Azure, Google Cloud).",
        "Colaboración con equipos internacionales para la implementación de nuevas características y resolución de incidencias.",
        "Aplicación de buenas prácticas de desarrollo seguro y cumplimiento de estándares del sector bancario."
      ],
      link: "",
    },
    {
      date: "Agosto 2023 - Febrero 2024",
      title: "Freelance FullStack Developer",
      company: "MEDRAR, Remoto",
      description: [
        "Migración de una aplicación JEE a tecnologías modernas basadas en Spring Boot y Angular, mejorando la escalabilidad y mantenibilidad del sistema.",
        "Implementación de arquitectura por capas y desarrollo de microservicios utilizando Spring Cloud y Maven.",
        "Desarrollo e integración de MicroFrontEnds, contribuyendo a una arquitectura de frontend modular y desacoplada.",
        "Participación activa en la definición e implementación de buenas prácticas de desarrollo, control de versiones con Git y gestión de dependencias con Maven.",
        "Diseño y ejecución de pruebas unitarias y de integración utilizando JUnit y Mockito.",
        "Colaboración estrecha con equipos de backend, frontend y QA para asegurar una correcta integración de los módulos.",
        "Administración y consulta de bases de datos MySQL, optimizando el rendimiento y la integridad de los datos.",
        "Automatización de procesos de integración y despliegue continuo mediante Jenkins en entornos de nube.",
        "Participación bajo metodologías ágiles (Scrum), asegurando entregas iterativas y de alto valor para el negocio."
      ],
      link: "",
    },
    {
      date: "Octubre 2022 - Agosto 2023",
      title: "Desarrollador FullStack",
      company: "GO-DIGITAL, Remoto",
      description: [
        "Desarrollo y mantenimiento de sistemas web y móviles utilizando Java (Spring Boot) y Node.js (Express.js).",
        "Implementación de nuevos módulos y funcionalidades en aplicaciones empresariales.",
        "Creación de interfaces dinámicas, modulares y reutilizables con Angular, y mantenimiento de proyectos heredados en AngularJS.",
        "Desarrollo de aplicaciones móviles multiplataforma con Ionic.",
        "Gestión y administración de bases de datos en Firebase, incluyendo autenticación, control de roles y permisos.",
        "Análisis de requisitos funcionales y diseño técnico de soluciones escalables.",
        "Integración de servicios backend con APIs REST, aplicando buenas prácticas de seguridad y manejo de datos.",
        "Colaboración en equipos multidisciplinarios bajo metodologías ágiles (Scrum).",
        "Optimización del rendimiento, refactorización de código y mejora continua de la arquitectura de los sistemas."
      ],
      link: "",
    }
  ]
}