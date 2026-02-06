# 📣 Gestión de Redes Sociales (Grupos)

Aquí configuras los botones de "Únete a nosotros" en la página de Comunidad.

## 📂 Archivo
Ruta: `src/data/social.js`

## ✏️ Cómo editar
Simplemente cambia el `url`, el nombre o la descripción:

```javascript
  {
    id: 'telegram',
    name: 'Telegram Oficial',
    desc: 'Chat general y noticias',
    url: 'https://t.me/TU_GRUPO_AQUI',  // <--- Pon aquí tu enlace
    icon: 'fa-brands fa-telegram',
    color: '#0088cc'
  },
```

Si quieres agregar otra red social (ej. Instagram), solo copia el bloque y cambia el icono a `fa-brands fa-instagram` y el color a `#E1306C`.
