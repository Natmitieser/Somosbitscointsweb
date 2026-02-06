# 📹 Gestión de Videos

Esta guía te explica cómo agregar, editar o eliminar videos de la web "Somos Bitcoin" sin tocar códigos complicados.

## 📂 ¿Dónde está el archivo?
El archivo que controla los videos está en:
`src/data/videos.js`

Puedes abrirlo con cualquier editor de texto (Notepad, VS Code, etc).

## ➕ Agregar un nuevo video
1. Copia un bloque de video existente (desde `{` hasta `},`).
2. Pégalo al final de la lista, antes del cierre `]`.
3. Edita los campos:

```javascript
  {
    id: '7',                            // Un número único
    title: 'Título del Video',
    description: 'Breve descripción...',
    url: 'https://youtube.com/...',     // Enlace AL VIDEO
    thumbnail: 'https://imagen...',     // Enlace A LA MINIATURA
    featured: true,                     // true (Sale en Inicio) o false (Solo Biblioteca)
    category: 'Tutoriales'              // Categoría para mostrar
  },
```

## ⚠️ Importante
*   **Comas**: Fíjate que cada bloque `{ }` termina con una coma `,` excepto el último.
*   **Miniaturas**: Para YouTube, la miniatura suele ser: `https://img.youtube.com/vi/ID_DEL_VIDEO/maxresdefault.jpg`.
*   **Featured**: Si pones `true`, aparecerá en la portada. Intenta no tener más de 3 o 4 para no saturar.
