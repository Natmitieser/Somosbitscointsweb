# 💻 Guía Técnica (Frontend)

Este archivo es para desarrolladores o usuarios avanzados que quieran modificar la estructura base del proyecto (HTML, CSS, Estructura).

## 📂 Estructura de Archivos
*   **Raíz (`/`)**:
    *   `index.html`: Página de Inicio.
    *   `library.html`: Página de Cursos/Biblioteca.
    *   `community.html`: Página de Comunidad y Eventos.
    *   `resources.html`: Página de Recursos y Glosario.
    *   `public/`: Archivos estáticos públicos (Logos, favicon).
*   **Fuentes (`src/`)**:
    *   `style.css`: Estilos globales y variables de color.
    *   `data/`: "Base de datos" en archivos `.js` (Videos, Eventos, Herramientas).
    *   `main.js`: Lógica del Home (Videos destacados).
    *   `library.js`: Lógica de la Biblioteca (Buscador, renderizado).
    *   `community.js`: Lógica de Eventos.
    *   `resources.js`: Lógica del Glosario.

## ✏️ Modificaciones Comunes (Código Base)

### 1. Cambiar el Logo
El logo es una imagen ubicada en `public/logo-transparent.png`.
*   **Opción A (Fácil)**: Simplemente reemplaza ese archivo con tu nuevo logo (debe llamarse igual y ser PNG transparente).
*   **Opción B (Código)**: Si cambias el nombre, debes editar la etiqueta `<img>` dentro de la clase `.navbar` en **los 4 archivos HTML**.

### 2. Editar el Menú o Footer
Actualmente, el sitio es **HTML Estático** (Vanilla). Esto significa que el menú (`<nav>`) y el pie de página (`<footer>`) están escritos en **cada uno de los 4 archivos HTML**.
*   **Si agregas un enlace al menú**: Debes copiar y pegar ese cambio en `index.html`, `library.html`, `community.html` y `resources.html`.
*   **Si cambias el Footer**: Lo mismo, edita los 4 archivos para mantener la consistencia.

### 3. Ajustes de Diseño (CSS)
El archivo `src/style.css` controla todo.
*   **Variables Globales**: Al inicio del archivo (`:root`) están los colores (`--primary`, `--bg-dark`).
*   **Scrollbar**: Al final del archivo están los estilos de la barra de desplazamiento (`::-webkit-scrollbar`).

### 4. Lógica de Videos (JS)
*   **Límite de videos en Home**: En `src/main.js`, busca la línea `.slice(0, 6)`. Cambia el `6` por el número de videos que quieras mostrar.
*   **Orden**: El orden se controla numéricamente en `src/data/videos.js` (campo `order`).

### 5. Transiciones de Página (Suavidad)
Para evitar "flashes" blancos y hacer la navegación elegante:
*   **CSS Crítico**: En el `<head>` de cada archivo HTML hay estilos `inline` (`<style>`). Controlan que la página inicie oculta (`opacity: 0`).
*   **Javascript**: Al final del `<body>` hay un script que maneja la barra de carga (`#loader-bar`) y hace el "Fade In".
*   Si quieres cambiar la velocidad, busca `transition: opacity 0.8s` en el HTML.

## 🚀 Despliegue (Deploy)
Este proyecto es estático. Puedes subirlo a cualquier hosting:
*   **Vercel / Netlify**: Simplemente conecta tu repositorio de GitHub.
*   **Hosting Tradicional**: Sube toda la carpeta del proyecto (asegúrate de que la estructura se mantenga).
