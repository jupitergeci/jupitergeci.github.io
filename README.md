# Portafolio académico

Sitio estático en Astro para presentar un CV, publicaciones, pinturas e intereses.

## Desarrollo local

Con Node.js 24, ejecuta `npm install` y luego `npm run dev`. Usa `npm run build` para generar el sitio estático en `dist/` y `npm run preview` para revisar esa compilación.

## Contenido

El sitio abre en inglés en `/` y la versión en español está en `/es/`. La ruta anterior `/en/` también muestra el contenido en inglés. Ambas versiones usan `src/components/Portfolio.astro`. Edita los textos del perfil, la trayectoria, las publicaciones y los intereses en `src/data/portfolio.ts`, con valores `es` y `en` para las traducciones. Conserva el PDF descargable en `CV.pdf`.

La galería usa una entrada por obra. Deja vacío `title` hasta que tenga título y pon la imagen principal al comienzo de `views`, seguida de sus detalles. Los JPG se guardan en `paints/`. El retrato `soyyo.jpg`, la foto de congreso `yoyo.jpeg`, el video `pds70c-stream.mp4` y su fotograma de portada se guardan en `paints/`.

## GitHub Pages

En el repositorio de GitHub, selecciona **Settings → Pages → Build and deployment → Source → GitHub Actions**. El flujo se ejecuta con un push a `main` o manualmente desde **Actions**. Astro toma la URL y el subdirectorio del sitio desde la configuración de Pages.

El flujo usa `npm ci` con el archivo `package-lock.json`.
