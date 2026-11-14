# 🏔️ Tarija Experiencias v1.0.0 — Sitio Turístico Estable

🎉 **Lanzamiento Estable — Web de Experiencias Turísticas de Tarija, Bolivia**

Esta versión consolida **Tarija Experiencias** como una plataforma profesional para descubrir y vivir las mejores experiencias del departamento de Tarija: enoturismo, aventura, bienestar, cultura y naturaleza. Sitio estático optimizado, desplegado en **Netlify** con deploy automático desde GitHub.

---

## 🔧 Innovaciones Técnicas en v1.0.0

Este lanzamiento representa la versión base estable del sitio, destacando:

- **Catálogo de experiencias:** 6 experiencias turísticas con galerías de imágenes (Ruta del Vino y Singani, Trekking Cerro Negro, Parque Nacional Aguaragüe, Centro Histórico, Cabalgata por Viñedos, Avistamiento de Cóndores).
- **Catálogo de destinos:** 6 destinos de Tarija con sus galerías (Valle de Concepción, San Lorenzo, Padcaya, Bermejo, Uriondo, Serranía del Sama).
- **Arquitectura modular:** JavaScript en ES modules separado en core (app, router, theme), componentes y páginas.
- **Imágenes optimizadas:** Todos los recursos gráficos en formato WebP para carga rápida.
- **Rutas limpias:** URLs amigables sin extensión `.html` mediante `_redirects` y `netlify.toml`.
- **Headers de caché y seguridad:** Configuración de `Cache-Control`, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` y `X-XSS-Protection` en Netlify.
- **Diseño responsive:** Mobile-first con sistema de grid, contenedor de 1200 px y tema claro/oscuro persistente.
- **Accesibilidad:** Skip-link, atributos `aria-*`, `focus-visible` y contraste WCAG.
- **PWA-ready:** `manifest.json` y favicon SVG.
- **Página 404 personalizada** y reglas de fallback.
- **Formulario de contacto:** Listo para integrar con Netlify Forms sin backend propio.

---

## 🚀 Guía de Despliegue

### 🌐 Despliegue en Netlify (recomendado)

Los archivos estáticos se despliegan directamente desde la raíz del repositorio (publish directory: `.`). No se requiere comando de compilación.

1. Sube el código a GitHub:
   ```bash
   git init
   git add .
   git commit -m "release: versión estable 1.0.0 para producción"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/tarijaexperiencias.git
   git push -u origin main
   ```
2. Conecta el repositorio en Netlify (**Add new site → Import an existing project → GitHub**).
3. Configura:
   - **Build command:** (vacío)
   - **Publish directory:** `.`
4. Despliega. Netlify volverá a desplegar automáticamente en cada `push` a `main`.

---

## ✨ Especificaciones de Software

- 🌐 **Plataforma:** Web estática (HTML5 / CSS3 / JavaScript)
- 📱 **Diseño:** Responsive mobile-first, tema claro/oscuro
- ⚡ **Rendimiento:** Imágenes WebP, caché de larga duración, lazy loading
- ♿ **Accesibilidad:** WCAG, skip-link, `aria-*`, `focus-visible`
- 🔒 **Seguridad:** Headers de seguridad HTTP en Netlify
- 📦 **Entorno:** Node.js >=18 (solo para desarrollo local)
- 🚀 **Hosting:** Netlify con deploy automático desde GitHub

---

## 👨‍💻 Autor

**Tarija Experiencias**  
📍 Tarija, Bolivia 🇧🇴  
© 2026 — Tarija Experiencias

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **MIT**.

---

**Descubre, elige y vive Tarija.**