# Tarija Experiencias

Sitio web profesional de experiencias turísticas de Tarija, Bolivia.  
Enoturismo, aventura, bienestar, cultura y naturaleza.

---

![Platform](https://img.shields.io/badge/platform-Web-blue?style=flat&logo=google-chrome&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Version](https://img.shields.io/badge/version-1.0.0-blue?style=flat)
![Status](https://img.shields.io/badge/status-Production-ready-brightgreen?style=flat)
![License](https://img.shields.io/badge/license-MIT-green?style=flat)
![Netlify](https://img.shields.io/badge/deploy-Netlify-00C7B7?style=flat&logo=netlify&logoColor=white)
![Node](https://img.shields.io/badge/node-%3E%3D18-green?style=flat&logo=node.js&logoColor=white)

---

## 🖼️ Vista previa

<p align="center">
  <img src="images%20utilitarios/Preview.png" alt="Tarija Experiencias — Vista previa" width="700"/>
</p>

---

## 📖 Descripción

**Tarija Experiencias** es una plataforma web para descubrir, elegir y vivir las mejores experiencias turísticas del departamento de Tarija, Bolivia. Desde rutas del vino y singani hasta trekking, cabalgatas, avistamiento de cóndores y tours culturales por el centro histórico.

El sitio está construido como una aplicación estática (HTML5 + CSS3 + JavaScript modular), optimizada para carga rápida, desplegada en **Netlify** con deploy automático desde GitHub.

---

## ✨ Características principales

- **6 experiencias turísticas** con galería de imágenes (enoturismo, aventura, naturaleza, cultura).
- **6 destinos** de Tarija con sus respectivas galerías (Concepción, San Lorenzo, Padcaya, Bermejo, Uriondo, Serranía del Sama).
- **Diseño responsive** mobile-first con sistema de grid y contenedor de 1200 px.
- **Tema claro/oscuro** persistente en `localStorage` con detección del sistema (`prefers-color-scheme`).
- **Rutas limpias** sin `.html` (ej: `/experiencias`, `/destinos`, `/contacto`).
- **Imágenes optimizadas en WebP** con caché de larga duración.
- **Lazy loading** en galerías y carruseles.
- **Accesibilidad:** skip-link, atributos `aria-*`, `focus-visible`, contraste WCAG.
- **PWA-ready:** `manifest.json` y favicon SVG.
- **Formulario de contacto** con validación en el cliente (listo para Netlify Forms).
- **Headers de seguridad y caché** configurados en `netlify.toml`.
- **Página 404 personalizada.**

---

## 📁 Estructura del proyecto

```
tarijaexperiencias/
├── index.html                 # Página de inicio
├── 404.html                   # Página de error personalizada
├── _redirects                 # Reglas de rutas limpias y fallback 404
├── netlify.toml               # Configuración de despliegue Netlify
├── manifest.json              # PWA manifest
├── favicon.svg                # Favicon del sitio
├── logo.svg                   # Logo principal
├── images%20utilitarios/  # Imágenes utilitarias (preview, screenshots, logos)
├── package.json               # Dependencias y scripts (Node >=18)
├── README.md                  # Este archivo
├── .gitignore                 # Archivos ignorados por Git
│
├── pages/                     # Páginas internas
│   ├── experiencias.html
│   ├── destinos.html
│   ├── contacto.html
│   ├── nosotros.html
│   ├── viajeros.html
│   └── proveedores.html
│
├── css/                       # Estilos modulares
│   ├── main.css
│   ├── base/                  # reset, variables, tipografía
│   ├── layouts/               # container, grid, sections
│   └── components/            # header, navigation, footer, buttons, cards, modal, forms, hero
│
├── js/                        # JavaScript (ES modules)
│   ├── core/                  # app, router, theme
│   ├── components/            # header, navigation, footer, hero, modal, cards, carousel
│   ├── pages/                 # home, experiences, destinations, travelers, providers, about, contact
│   └── utils/                 # render-grid
│
└── data/                      # Datos estáticos
    ├── experiencias.js        # Catálogo de experiencias (rutas, galerías)
    └── destinos.js            # Catálogo de destinos (municipios, galerías)
│
└── assets/images/
    ├── Experiencias/          # Galerías de experiencias (6 carpetas, 1-3.webp cada una)
    ├── Destinos/              # Galerías de destinos (6 carpetas, 1-3.webp cada una)
    ├── experiencia-1..6.webp  # Imágenes destacadas de experiencias
    ├── destino-1..6.webp      # Imágenes destacadas de destinos
    └── placeholder-*.webp     # Fotos reales de Tarija (placeholders principales)
```

---

## 🚀 Cómo ejecutar en desarrollo

Requiere [Node.js](https://nodejs.org/) (>=18).

```bash
# Instalar dependencias de desarrollo (una sola vez)
npm install

# Levantar servidor de desarrollo en http://localhost:5500
npm run dev
```

---

## 📷 Capturas de pantalla

<p align="center">
  <img src="images%20utilitarios/screenshot.png" alt="Tarija Experiencias — Home" width="600"/>
</p>

---

## ℹ️ About

**Tarija Experiencias** es un sitio web institucional y turístico dedicado a promover las experiencias auténticas de Tarija, Bolivia.

| Campo | Valor |
|-------|-------|
| **Nombre** | Tarija Experiencias |
| **Descripción** | Descubre, elige y vive Tarija — enoturismo, aventura, bienestar, cultura y naturaleza |
| **Versión** | 1.0.0 |
| **Plataforma** | Web estática (HTML5 / CSS3 / JavaScript) |
| **Hosting** | Netlify (deploy automático desde GitHub) |
| **Autor** | Tarija Experiencias |
| **Ubicación** | Tarija, Bolivia 🇧🇴 |
| **Año** | 2026 |
| **Licencia** | MIT |

---

## ⚙️ Despliegue en Netlify (GitHub + deploy automático)

### Paso 1: Sube el código a GitHub

```bash
git init
git add .
git commit -m "release: versión estable 1.0.0 para producción"
git branch -M main
git remote add origin https://github.com/tu-usuario/tarijaexperiencias.git
git push -u origin main
```

### Paso 2: Conecta Netlify

1. Ve a [netlify.com](https://netlify.com) e inicia sesión.
2. Haz clic en **"Add new site" → "Import an existing project"**.
3. Selecciona **GitHub** y autoriza Netlify.
4. Elige el repositorio `tarijaexperiencias`.
5. Configuración de build (sitio estático, sin paso de compilación):
   - **Build command:** (vacío / no necesario)
   - **Publish directory:** `.` (punto, raíz del repositorio)
6. Haz clic en **"Deploy site"**.

### Paso 3: Deploy automático

Una vez conectado, Netlify desplegará automáticamente en cada `push` a la rama `main`. También puedes habilitar **deploy previews** para pull requests.

### Paso 4: Dominio personalizado

En Netlify → **Site settings → Domain management**, agrega tu dominio real y actualiza el `canonical` y `og:url` en `index.html`.

---

## ✅ Checklist de producción (versión estable 1.0.0)

- [x] Rutas de imágenes corregidas (`Experiencias/`, `Destinos/`)
- [x] Imágenes en formato WebP (carga rápida)
- [x] `netlify.toml` con headers de caché y seguridad
- [x] `_redirects` con rutas limpias y 404 personalizado
- [x] Lazy loading en galerías
- [x] Tema claro/oscuro con detección del sistema
- [x] Diseño responsive mobile-first
- [x] Accesibilidad (skip-link, `aria-*`, `focus-visible`)
- [x] PWA-ready (`manifest.json`, favicon SVG)
- [x] Formulario de contacto listo para Netlify Forms
- [ ] Cambiar `canonical` y `og:url` por tu dominio real
- [ ] Configurar Netlify Forms para contacto (opcional)

---

## 🛠 Tecnologías

- HTML5 semántico + accesibilidad
- CSS3 moderno con variables, `clamp()`, `aspect-ratio`, `backdrop-filter`
- JavaScript modular (ES modules): core, componentes, páginas, utilitarios
- Diseño responsive (mobile-first), tema claro/oscuro persistente
- Imágenes optimizadas en WebP
- Netlify para hosting y deploy automático desde GitHub

---

## 🧪 Calidad

- Reset CSS + normalización base.
- Transiciones reducidas (`prefers-reduced-motion`).
- Soporte para tema oscuro (`prefers-color-scheme` y selector manual).
- Índice de z-index centralizado y contenedor de ancho máximo (1200 px).

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **MIT**.

---

## 👨‍💻 Autor

**Walter Pablo Téllez Ayala**  
Software Developer  
📍 Bolivia 🇧🇴 <img src="https://flagcdn.com/w20/bo.png" width="20"/><br>
📧 pharmakoz@gmail.com

**Tarija Experiencias**  
---

**Descubre. Elige. Vive Tarija.**