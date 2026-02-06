# 📅 Gestión de Eventos

Aquí te explico cómo mantener actualizado el calendario de la pestaña "Comunidad".

## 📂 Archivo de Control
Ruta: `src/data/events.js`

## ➕ Agregar un evento
Sigue este formato para añadir eventos a la lista:

```javascript
  {
    id: '4',
    title: 'Nombre del Evento',
    date: '2024-04-10',             // Formato AÑO-MES-DIA
    time: '20:00 GMT-4',            // Hora
    type: 'live',                   // live, workshop, etc.
    platform: 'Zoom',               // Donde será
    link: 'https://zoom.us/...',    // Enlace para unirse
    description: 'Descripción corta del evento.'
  },
```

## 💡 Consejos
*   **Fechas Pasadas**: El sistema NO borra automáticamente los eventos pasados (por ahora). Deberás borrarlos manualmente del archivo cuando ocurran.
*   **Enlaces**: Asegúrate de poner el `https://` completo para que el botón funcione.
