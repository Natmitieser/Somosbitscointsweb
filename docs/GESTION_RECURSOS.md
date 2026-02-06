# 🛠️ Gestión de Recursos

Esta guía te enseña a modificar la biblioteca de conocimientos y el kit de herramientas de la página "Recursos".

## 📖 Diccionario (Glosario)
Archivo: `src/data/glossary.js`

Para agregar una nueva palabra, copia este bloque y pégalo al final de la lista:

```javascript
  {
    term: 'Palabra Nueva',
    definition: 'Aquí escribe la definición clara y sencilla.'
  },
```

## 🧰 Kit de Herramientas (Tools)
Archivo: `src/data/tools.js`

Para recomendar una nueva herramienta, wallet o exchange:

```javascript
  {
    id: '5',
    name: 'Nombre Herramienta',
    type: 'Wallet',                 // Puede ser: Wallet, Explorador, Educación, Mercado, Podcast...
    description: 'Descripción corta.',
    url: 'https://enlace.com',
    icon: 'fa-solid fa-star',       // Ver lista de iconos abajo
    color: '#ff0000'                // Color HEX para el borde (ej. #F7931A para naranja)
  },
```

### 🎨 Iconos Útiles (Copiar y Pegar)
No necesitas buscar en internet, aquí tienes los más comunes:
*   💰 **Billetera**: `fa-solid fa-wallet`
*   🧊 **Bloque/Cubo**: `fa-solid fa-cube`
*   📈 **Gráfico**: `fa-solid fa-chart-line`
*   🎓 **Educación**: `fa-solid fa-graduation-cap`
*   🛡️ **Seguridad**: `fa-solid fa-shield-halved`
*   🔍 **Lupa**: `fa-solid fa-magnifying-glass`
*   🔒 **Candado**: `fa-solid fa-lock`
*   📱 **Móvil**: `fa-solid fa-mobile-screen`
*   🎧 **Auriculares**: `fa-solid fa-headphones`
*   🌐 **Mundo**: `fa-solid fa-globe`

## 💲 Widget de Precio
El precio de Bitcoin se actualiza automáticamente desde internet. No necesitas configurar nada. Si falla la conexión, mostrará un precio guardado por defecto en `src/resources.js`.
