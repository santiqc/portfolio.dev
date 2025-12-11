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
      date: "Mayo 2024 - Actual",
      title: "Desarrollador SemiSenior",
      company: "LinkTic, Remoto",
      description: [
        "Desarrollo e integración de microservicios backend utilizando Java (Spring Boot, Spring Cloud, Spring Batch, Spring WebFlux) y JPA/Hibernate.",
        "Implementación de arquitecturas reactivas con Spring WebFlux, trabajando con flujos asíncronos y backpressure para mejorar la escalabilidad.",
        "Desarrollo de microservicios con Quarkus, optimizando tiempos de arranque y consumo de recursos.",
        "Gestión y optimización de bases de datos PostgreSQL, versionamiento de esquemas con Liquibase y mejora de rendimiento.",
        "Configuración de Spring Security, Keycloak y OAuth para autenticación, autorización y control de accesos.",
        "Implementación de mensajería asíncrona con Google Cloud Pub/Sub y ActiveMQ, aplicando patrones event-driven y comunicación distribuida.",
        "Uso de AWS S3 para almacenamiento de archivos y gestión de recursos estáticos; conocimientos aplicados equivalentes a AWS SQS/SNS basados en experiencia con Pub/Sub y ActiveMQ.",
        "Adaptación a modelos NoSQL mediante experiencia en Firebase, con capacidad para trabajar en entornos similares como DynamoDB.",
        "Automatización de infraestructura y despliegues utilizando Terraform, AWS y Microsoft Azure.",
        "Contenerización y orquestación con Docker y Kubernetes.",
        "Pruebas unitarias e integración con JUnit y Mockito.",
        "Monitoreo y control de calidad del software mediante Grafana y SonarQube.",
        "Implementación de soluciones de gestión documental con Alfresco y generación de reportes con JasperReports.",
        "Trabajo bajo metodologías ágiles (Scrum) con enfoque en entrega continua y mejora de procesos."
      ],
      link: "",
    },
    {
      date: "Abril 2024 - Julio 2024",
      title: "Desarrollador FullStack Freelance",
      company: "Freelance, Remoto",
      description: [
        "Desarrollo y mantenimiento de nuevas funcionalidades en una aplicación bancaria de gran escala.",
        "Implementación de microservicios backend con Java (Spring Boot) y microfrontends con Angular.",
        "Gestión y optimización de bases de datos Oracle, incluyendo consultas complejas y mantenimiento de esquemas.",
        "Diseño y ejecución de pruebas unitarias con JUnit y Mockito.",
        "Integración continua y despliegues automatizados mediante Jenkins.",
        "Control de versiones con GitLab, SVN y SVS.",
        "Participación en arquitecturas distribuidas desplegadas en nubes híbridas (AWS, Azure, Google Cloud).",
        "Aplicación de buenas prácticas de desarrollo seguro y cumplimiento de estándares del sector bancario.",
        "Implementación de arquitecturas event-driven (EAC) aprovechando experiencia en mensajería asíncrona con ActiveMQ y Pub/Sub, aplicable a entornos AWS (SQS/SNS)."
      ],
      link: "",
    },
    {
      date: "Agosto 2023 - Febrero 2024",
      title: "Freelance FullStack Developer",
      company: "Medrar, Remoto",
      description: [
        "Migración de una aplicación JEE a tecnologías modernas basadas en Spring Boot y Angular.",
        "Implementación de arquitectura por capas y microservicios usando Spring Cloud y Maven.",
        "Desarrollo e integración de microfrontends, contribuyendo a una arquitectura modular.",
        "Diseño y ejecución de pruebas unitarias y de integración con JUnit y Mockito.",
        "Trabajo conjunto con equipos backend, frontend y QA para una integración correcta de módulos.",
        "Administración y consulta de bases de datos MySQL, optimizando rendimiento.",
        "Automatización CI/CD con Jenkins en entornos cloud.",
        "Trabajo bajo metodologías ágiles (Scrum).",
        "Desarrollo de servicios ligeros utilizando Java Quarkus para optimización de rendimiento."
      ],
      link: "",
    },
    {
      date: "Octubre 2022 - Septiembre 2023",
      title: "Desarrollador FullStack",
      company: "Go-Digital, Remoto",
      description: [
        "Desarrollo y mantenimiento de sistemas web y móviles utilizando Java (Spring Boot) y Node.js (Express.js).",
        "Implementación de nuevos módulos y funcionalidades en aplicaciones empresariales.",
        "Creación de interfaces dinámicas y modulares con Angular, y mantenimiento de proyectos en AngularJS.",
        "Desarrollo de aplicaciones móviles multiplataforma con Ionic.",
        "Gestión de bases de datos en Firebase, incluyendo autenticación, control de roles y permisos.",
        "Integración de servicios backend con APIs REST bajo buenas prácticas de seguridad.",
        "Análisis de requisitos y diseño técnico de soluciones escalables.",
        "Trabajo bajo metodologías ágiles (Scrum).",
        "Optimización y refactorización de arquitectura en sistemas existentes."
      ],
      link: "",
    },
    {
      date: "Enero 2022 - Septiembre 2022",
      title: "Desarrollador de Software",
      company: "Disoft LA, Remoto",
      description: [
        "Análisis, desarrollo y mantenimiento de un microservicio Full Stack utilizando Java (Spring Boot) para el backend y Angular para el frontend.",
        "Trabajo bajo el marco de desarrollo JHipster, integrando tecnologías como Maven, Liquibase y PostgreSQL.",
        "Implementación de autenticación y autorización mediante Spring Security y OAuth2.",
        "Uso de JPA/Hibernate para el manejo y persistencia de datos.",
        "Construcción de APIs RESTful para la comunicación entre servicios y módulos.",
        "Desarrollo de funcionalidades escalables y mantenibles siguiendo buenas prácticas de diseño.",
        "Participación en procesos de mejora continua y solución de incidencias dentro del ciclo de vida del producto."
      ],
      link: "",
    }
  ]
}