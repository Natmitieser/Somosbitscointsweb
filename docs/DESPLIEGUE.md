# 🚀 Guía de Despliegue (Deploy)

¡Tu sitio está listo para salir al mundo! Aquí tienes las dos mejores opciones gratuitas y profesionales.

## Opción 1: Netlify Drop (La más fácil)
Ideal si no quieres configurar Git o cuentas complejas.

1.  En tu carpeta del proyecto, verás una carpeta llamada **`dist`** (se acaba de crear).
2.  Entra a [app.netlify.com/drop](https://app.netlify.com/drop).
3.  Arrastra carpeta `dist` completa dentro del recuadro en la pantalla.
4.  ¡Listo! Te dará un enlace (ej. `sitio-increible.netlify.app`).

## Opción 2: Vercel (Recomendada / Profesional)
Ideal para actualizaciones automáticas si usas GitHub.

1.  Sube tu código a un repositorio en **GitHub**.
2.  Entra a [vercel.com](https://vercel.com) y regístrate.
3.  Dale a "Add New Project" e importa tu repositorio de GitHub.
4.  Vercel detectará que es **Vite**.
5.  Dale a **Deploy**.

## ⚠️ Importante
Yo ya dejé configurado el archivo `vite.config.js` para que todas las páginas (`library.html`, `community.html`, etc.) funcionen correctamente al subirse.

*   Si haces cambios en el futuro, recuerda ejecutar `npm run build` en tu terminal para actualizar la carpeta `dist`.
