# Capital Experts — Sitio Web Corporativo

> **Capital Experts, SAPI de C.V.** — Desarrolladora e Inversión Inmobiliaria especializada en fondeo, estructuración y comercialización de proyectos de alta rentabilidad en el Noroeste de México.

🌐 **Producción:** [https://donatoalvarez.dev/capitalExperts/](https://donatoalvarez.dev/capitalExperts/)

---

## 📋 Descripción

Sitio web corporativo y catálogo de proyectos inmobiliarios para **Capital Experts**, empresa con más de **45 años de experiencia** combinada en el ramo de la construcción, finanzas y corretaje de bienes raíces en la región del Noroeste de México (Tijuana, B.C.).

El sitio está diseñado para captar **inversionistas y clientes** interesados en modalidades de inversión inmobiliaria con alta rentabilidad, así como para mostrar el portafolio de proyectos residenciales, comerciales e industriales de la empresa.

---

## 🏢 Identidad y Marca

| Atributo | Detalle |
|---|---|
| **Razón Social** | Capital Experts, SAPI de C.V. |
| **Ramo** | Desarrollo inmobiliario, fondeo independiente y gerencia de proyectos |
| **Región** | Noroeste de México (Tijuana, Baja California y área metropolitana) |

### 🎨 Paleta de Color

| Rol | Valor | |
|---|---|---|
| Primario (Azul Corporativo) | `#253571` | Navbar, secciones azules, botones principales |
| Acento (Carmesí) | `#E81A46` | Botones de llamada a la acción, bordes activos |
| Resalte (Cyan / Aqua) | `#48D7E5` | Confirm buttons en SweetAlert2 |
| Fondo Oscuro | `#0E0E19` | Hero overlay, fondo de modales |
| Fondo Claro | `#F0F0F0` | Background general del cuerpo |
| Texto Formulario | `#464657` | Labels e inputs |

---

## 🗂️ Estructura del Proyecto

```
capitalExperts/
├── index.html          # Landing page principal (Hero, Nosotros, Proyectos, Contacto)
├── proyect.html        # Detalle dinámico de cada proyecto (cargado por query param)
├── register.html       # Formulario de registro / prospecto
├── index.php           # Backend: procesamiento del formulario de contacto (PHPMailer)
├── index.js            # Lógica del cliente: modal SweetAlert2 y envío de formulario
├── 404.html            # Página de error personalizada
├── info.html           # Página de info adicional de proyectos
├── package-lock.json   # Lockfile de npm
├── assets/
│   ├── img/
│   │   ├── gallery/                  # Miniaturas del catálogo de proyectos
│   │   ├── proyects/                 # Galería detallada por proyecto
│   │   │   ├── torre-y-19/
│   │   │   ├── rosarito-1/
│   │   │   ├── carwash/
│   │   │   ├── nave-murua-3/
│   │   │   └── casas-libertad-1/
│   │   ├── hero-capital.jpg          # Imagen de fondo del hero
│   │   ├── building.jpg              # Sección "Nosotros"
│   │   ├── employees.jpg             # Sección de gestión independiente
│   │   ├── logo-capital-experts.svg  # Logotipo SVG
│   │   └── Logo.png                  # Logotipo PNG
│   └── icons/                        # SVGs de iconos y redes sociales
└── phpMailer/
    ├── PHPMailer.php
    ├── SMTP.php
    ├── Exception.php
    ├── OAuth.php
    └── POP3.php
```

---

## 📄 Páginas y Secciones

### `index.html` — Landing Page

| Sección | ID | Descripción |
|---|---|---|
| **Hero** | — | Imagen de fondo con overlay azul, tagline *"INCREMENTA TU CAPITAL"*, botón de contacto y mini-iconos de servicios |
| **Nosotros** | `#about` | Historia y propuesta de valor de Capital Experts (45+ años, sinergia de empresas especializadas) |
| **Gestión Independiente** | — | Diferenciador clave: fondeo y comercialización autónomos, programa físico-financiero propio |
| **Proyectos** | `#proyects` | Galería de portafolio con 5 proyectos enlazados a `proyect.html` |
| **Contacto** | `#contact` | Formulario de captura de prospecto (nombre, correo, teléfono) enviado vía PHPMailer |
| **Footer** | — | Copyright © 2026, redes sociales (Facebook, Instagram) |

#### Servicios destacados en el Hero

- **Gerencia de Proyectos** — Traslado y gestión de operaciones en México
- **Fondo de Inversión Inmobiliario** — Para empresas nacionales y extranjeras
- **Experiencia** — Construcción industrial y comercial

### `proyect.html` — Detalle de Proyecto (Dinámico)

Carga el contenido según el query param `?name=`:

| Slug (`?name=`) | Proyecto |
|---|---|
| `torre-y-19` | Torre Y19 |
| `rosarito-1` | Residencial Rosarito |
| `carwash` | Carwash BW |
| `nave-murua-3` | Nave Murua 3 |
| `casas-libertad-1` | Casas Libertad |

---

## 🛠️ Tecnologías

| Tecnología | Versión | Uso |
|---|---|---|
| **HTML5 & CSS3** | — | Estructura y estilos base |
| **Tailwind CSS** | `2.2.19` | Utility-first CSS (CDN) |
| **Tailwind Custom Forms** | — | Normalización de campos de formulario |
| **Montserrat / Inter** | Google Fonts | Tipografías corporativas |
| **SweetAlert2** | `v11` | Modal de agendamiento de llamada con asesor |
| **Moment.js** | `2.29.1` | Gestión de fechas para el `datetime-local` del agendamiento |
| **PHPMailer** | `^6.x` | Envío de correos desde el backend PHP al recibir prospectos |

> **Nota:** No hay build step ni bundler. Todo se sirve de forma estática (HTML/CSS/JS vanilla) excepto el formulario PHP de contacto.

---

## ⚙️ Funcionalidades JavaScript (`index.js`)

### `submitted()`
Muestra un toast de SweetAlert2 con confirmación de envío del formulario de contacto.

### `callForm()`
Abre un modal SweetAlert2 con un formulario completo para **agendar una llamada con un asesor**, incluyendo:
- Nombre
- Número de teléfono
- Motivo de la consulta
- Selector de fecha y hora (`datetime-local`) con mínimo en la fecha actual (Moment.js)

Valida que todos los campos estén completos antes de confirmar.

---

## 🚀 Despliegue

El sitio se sirve de forma **estática** en GitHub Pages para todo el contenido front-end. El formulario de contacto (`index.php`) requiere un servidor PHP para funcionar.

| Ambiente | URL |
|---|---|
| **Producción** | [https://donatoalvarez.dev/capitalExperts/](https://donatoalvarez.dev/capitalExperts/) |

### Ramas
- `main` — código fuente
- `gh-pages` — rama sincronizada para GitHub Pages

---

## 📦 Ejecutar Localmente

El sitio no tiene dependencias de build. Para desarrollar localmente basta con un servidor de archivos estáticos:

```bash
# Con VS Code Live Server (recomendado)
# Instala la extensión "Live Server" y abre index.html

# O con npx
npx serve .

# Para probar el formulario PHP necesitas un servidor con PHP:
php -S localhost:8000
```

---

## 📁 Portafolio de Proyectos

| Proyecto | Tipo | Ubicación |
|---|---|---|
| **Torre Y19** | Residencial / Vertical | Tijuana, B.C. |
| **Residencial Rosarito** | Residencial / Horizontal | Rosarito, B.C. |
| **Carwash BW** | Comercial | Tijuana, B.C. |
| **Nave Murua 3** | Industrial | Tijuana, B.C. |
| **Casas Libertad** | Residencial / Horizontal | Tijuana, B.C. |

---

## 📄 Licencia

[MIT License](./LICENSE) — © 2026 Capital Experts, SAPI de C.V. Todos los derechos reservados.
