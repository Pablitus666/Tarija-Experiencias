# Tarija Experiencias

Sitio web profesional de experiencias turísticas de Tarija, Bolivia.
Enoturismo, aventura, bienestar, cultura y naturaleza.

## 📁 Estructura del proyecto

```
tarijaexperiencias/
├── index.html                 # Página de inicio
├── favicon.svg                # Favicon del sitio
├── manifest.json              # PWA manifest
├── pages/                     # Páginas internas
│   ├── experiencias.html
│   ├── destinos.html
│   ├── viajeros.html
│   ├── proveedores.html
│   ├── nosotros.html
│   └── contacto.html
├── css/                       # Estilos (modulares por @import)
│   ├── main.css               # Punto de entrada CSS
│   ├── base/                  # reset, variables, tipografía
│   ├── layouts/               # container, grid, sections
│   └── components/            # header, navigation, footer, buttons, cards, modal, forms, hero
├── js/                        # JavaScript (módulos ES)
│   ├── core/                  # app, router, theme
│   ├── components/            # header, navigation, footer, hero, modal, cards
│   ├── pages/                 # home, experiences, destinations, travelers, providers, about, contact
│   └── utils/                 # render-grid
├── data/                      # Datos estáticos (experiencias, destinos)
├── assets/                    # Imágenes y logo
│   ├── images/
│   └── logo.svg
└── node_modules/              # Dependencias de desarrollo
```

## 🚀 Cómo ejecutar en desarrollo

Requiere [Node.js](https://nodejs.org/).

```bash
# Instalar dependencias (una sola vez)
npm install

# Levantar servidor de desarrollo en http://localhost:5500
npm run dev
```

## ✅ Tecnologías y decisiones de diseño

- HTML5 semántico + accesibilidad (skip-link, `aria-*`, `focus-visible`).
- CSS moderno con variables (tokens), `clamp()`, `color-mix()`, `aspect-ratio`, `backdrop-filter` y `clip-path`.
- Diseño responsive (mobile-first), sistema de grid y contenedor.
- Tema claro/oscuro persistente en `localStorage` con detección del sistema.
- Arquitectura modular en JavaScript (ES modules): core (app, router, theme), componentes, páginas y utilitarios.
- Formulario de contacto con validación en el cliente.
- Service-ready: `manifest.json` y favicon SVG.

## ⚙️ Antes de publicar a producción

### 1. Configuración de dominio y SEO

Cambia el `canonical` y las etiquetas Open Graph (`og:url`) de `index.html`
por tu dominio real (actualmente usa `tarijaexperiencias.example.com` como placeholder).

### 2. Imágenes reales

Reemplaza los archivos SVG placeholder en `assets/images/` por fotografías reales
de las experiencias y destinos de Tarija. Las imágenes ya están optimizadas en
formato WebP.

### 3. Formulario de contacto

Configura **Netlify Forms** para el formulario de contacto. Netlify lo maneja
de forma nativa sin backend propio (ver sección de despliegue abajo).

## 🚀 Despliegue en Netlify (GitHub + deploy automático)

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
5. Configuración de build (dejarlos vacíos, sitio estático):
   - **Build command:** (vacío / no necesario)
   - **Publish directory:** `.` (punto, raíz del repositorio)
6. Haz clic en **"Deploy site"**.

### Paso 3: Deploy automático

Una vez conectado, Netlify desplegará automáticamente en cada `push` a la rama
`main`. También puedes habilitar **deploy previews** para pull requests.

### Paso 4: Dominio personalizado

En Netlify → **Site settings → Domain management**, agrega tu dominio real
(y actualiza el `canonical` y `og:url` en `index.html`).

## ✅ Checklist de producción (versión estable)

- [x] Rutas de imágenes corregidas (`Experiencias/`, `Destinos/` con mayúscula inicial para Linux/Netlify)
- [x] `netlify.toml` configurado con headers de caché y seguridad
- [x] `_redirects` con rutas limpias y 404 personalizado
- [x] Imágenes en formato WebP (carga rápida)
- [x] Lazy loading en galerías de carrusel
- [x] Tema claro/oscuro con detección del sistema
- [x] Diseño responsive mobile-first
- [x] Accesibilidad: skip-link, `aria-*`, `focus-visible`, contraste WCAG
- [x] PWA-ready: `manifest.json` y favicon SVG
- [ ] Reemplazar placeholders SVG por fotos reales de Tarija
- [ ] Cambiar `canonical` y `og:url` por tu dominio real
- [ ] Configurar Netlify Forms para contacto

## 🛠 Tecnologías

- HTML5 semántico + accesibilidad
- CSS moderno con variables (tokens), `clamp()`, `aspect-ratio`, `backdrop-filter`
- JavaScript modular (ES modules): core, componentes, páginas, utilitarios
- Diseño responsive (mobile-first), tema claro/oscuro persistente
- Imágenes optimizadas en WebP
- Netlify para hosting y deploy automático desde GitHub

## 🧪 Calidad

- Reset CSS + normalización base.
- Transiciones reducidas (`prefers-reduced-motion`).
- Soporte para tema oscuro (`prefers-color-scheme` y selector manual).
- Índice de z-index centralizado y contenedor de ancho máximo (1200px).
