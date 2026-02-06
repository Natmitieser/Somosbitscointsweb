# 🎨 Personalización y Textos

Guía rápida para cambiar colores, logos y textos generales.

## 🌈 Colores y Fuente
Todo el diseño se controla desde: `src/style.css`

Busca estas líneas al principio del archivo:

```css
:root {
  --primary: #F7931A;      /* Color Naranja Principal */
  --bg-dark: #0a0a0a;      /* Color de Fondo */
  --bg-card: #161616;      /* Color de las Tarjetas */
}
```
Cambia los códigos HEX (`#...`) para cambiar el tema de toda la web instantáneamente.

## 📝 Textos Principales
*   **Título Hero (Inicio)**: Archivo `index.html` → Busca `<h1 ...>Aprende sobre...</h1>`.
*   **Menú de Navegación**: Está repetido en `index.html`, `library.html`, `community.html` y `resources.html`. Si cambias uno, recuerda cambiar los cuatro.

## 🖼️ Imágenes
*   Las imágenes están vinculadas directamente en el HTML.
*   Para cambiar la imagen de fondo de la portada, busca en `index.html` la etiqueta `<img>` dentro de `hero-image`.
