
# Williams Alas — Systems Engineer

<p align="center">
  <strong>Portafolio personal de Ingeniería de Sistemas</strong>
</p>

<p align="center">
  Arquitectura · Desarrollo Web · Cloud · DevOps · Automatización
</p>

---

Bienvenido a mi repositorio principal. Soy Ingeniero en Sistemas especializado en el diseño, desarrollo y despliegue de aplicaciones web escalables. Mi enfoque principal es la creación de arquitecturas sólidas, desde la optimización de bases de datos hasta la implementación de interfaces de usuario eficientes y modernas.

Apasionado por la resolución de problemas complejos, la integración de sistemas y el mantenimiento de estándares de código limpios bajo entornos Linux (WSL/Ubuntu).

## 🛠️ Stack Tecnológico y Herramientas

Mi entorno de desarrollo y conjunto de habilidades se centran en tecnologías modernas para garantizar rendimiento y escalabilidad:

* **Frontend:** React, Next.js, Tailwind CSS.
* **Backend:** Laravel (PHP), Python, Node.js.
* **Bases de Datos & ORM:** MariaDB, Prisma ORM.
* **Arquitectura & Entorno:** Ubuntu / WSL, Git Avanzado (Manejo de submódulos e integración continua), SSH.
* **Hardware & Soporte:** Integración de software con hardware especializado (pantallas industriales IP67), ensamblaje y mantenimiento de equipos.

## ⚙️ Metodología y Prácticas de Desarrollo

* **Control de Versiones:** Uso riguroso de Git, gestionando integraciones complejas y flujos de trabajo estructurados.
* **Diseño de Arquitectura:** Enfoque en MVC (Modelo-Vista-Controlador) y arquitecturas basadas en componentes para facilitar la escalabilidad y el mantenimiento del código.
* **UI/UX Orientado al Rendimiento:** Desarrollo de interfaces limpias, priorizando el tiempo de carga y la experiencia del usuario final.

---

## Sobre el proyecto

Este repositorio contiene el código fuente de mi portafolio personal como **Ingeniero de Sistemas**.

El proyecto fue diseñado como algo más que una página de presentación. La intención es representar visualmente mi forma de abordar los sistemas: estructuras claras, componentes reutilizables, interfaces funcionales y una arquitectura preparada para evolucionar.

El portafolio reúne en un mismo espacio mi perfil profesional, enfoque de trabajo, stack tecnológico, certificaciones y medios de contacto.

## Tecnologías utilizadas

Estas son las tecnologías utilizadas directamente para desarrollar este portafolio:

### Framework y lenguaje
Next.js
TypeScript

Next.js proporciona la estructura principal de la aplicación y utiliza React como base para la construcción de la interfaz.

### Estilos y animaciones
Tailwind CSS
Framer Motion

Tailwind CSS se utiliza para la construcción y adaptación visual de la interfaz, mientras que Framer Motion se utiliza para animaciones, transiciones e interacciones.

## Secciones principales

- **Hero** — Presentación y enfoque profesional.
- **Ingeniería con propósito** — Una introducción a mi perfil y forma de trabajo.
- **Stack tecnológico** — Tecnologías utilizadas en frontend, backend, bases de datos e infraestructura.
- **Certificaciones** — Formación y credenciales técnicas.
- **Contacto** — Canal directo para oportunidades profesionales y proyectos.

## Estructura del proyecto

La aplicación está organizada principalmente mediante las carpetas app, components y public.

/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── about/
│   │   ├── Content/
│   │   ├── types/
│   │   └── About.tsx
│   │
│   ├── certificados/
│   │   ├── Content/
│   │   ├── types/
│   │   └── certificado.tsx
│   │
│   ├── common/
│   │   ├── types/
│   │   └── animationEntry.tsx
│   │
│   ├── contact/
│   │   ├── Content/
│   │   ├── types/
│   │   └── contact.tsx
│   │
│   ├── footer/
│   │   ├── Content/
│   │   ├── types/
│   │   └── footer.tsx
│   │
│   ├── header/
│   │   ├── Content/
│   │   ├── types/
│   │   └── header.tsx
│   │
│   ├── hero/
│   │   ├── Content/
│   │   ├── types/
│   │   └── hero.tsx
│   │
│   ├── stacks/
│   │   ├── Content/
│   │   ├── types/
│   │   └── stack.tsx
│   │
│   └── ui/
│       ├── types/
│       └── Button.tsx
│
├── node_modules/
├── public/
│
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json

app/

Contiene la estructura principal de la aplicación Next.js.

- layout.tsx — Layout principal de la aplicación.
- page.tsx — Página principal.
- globals.css — Estilos globales.
- favicon.ico — Icono del sitio.
- components/

Contiene los componentes que construyen las diferentes secciones del portafolio.

Cada sección principal mantiene su propia carpeta:

- about/
- certificados/
- common/
- contact/
- footer/
- header/
- hero/
- stacks/
- ui/
- Content/

Las carpetas Content/ contienen componentes internos utilizados para construir cada sección.

Esta separación permite dividir secciones complejas en componentes más pequeños.

- types/

Las carpetas types contienen los tipos y estructuras de datos utilizados por los componentes correspondientes.

- ui/

Contiene componentes reutilizables de interfaz.

- public/

Contiene los recursos estáticos utilizados por el portafolio, como imágenes y documentos.

=======

## Instalar las dependencias

Dentro de la carpeta del proyecto ejecuta:

npm install

Este comando lee el archivo package.json e instala automáticamente las dependencias necesarias.

No es necesario instalar React, Next.js, Tailwind u otras dependencias manualmente.

## Ejecutar el servidor de desarrollo

Inicia el servidor de desarrollo.:

```sh
npm run dev
```

O Ejecuta en producción

```sh
npm run build
```
Después de ejecutar npm run build inicia la aplicación utilizando la versión de producción:

```sh
npm start
```

Abre esa dirección en tu navegador.

```sh
http://localhost:3000
```
para acceder directamente al portafolio.

Para detener el servidor:

```sh
Ctrl + C
```

---

## 📫 Contacto

Estoy abierto a nuevas oportunidades profesionales, colaboraciones y retos técnicos. 

* **Email:** [walabalaz.dev@gmail.com](mailto:tu.correo@email.com)
* **Portafolio Web:** [Williams Alas | Ingeniero de Sistemas](#https://ingeniero-de-sistemas-williams-alas.netlify.app/)
