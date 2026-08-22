# Espar Co. — sitio web

Sitio estático (HTML/CSS/JS puro, sin framework ni build step) de **esparco.com.ar**.

## Lo que necesitás tener a mano

| Qué | Dato |
|---|---|
| Dominio | **esparco.com.ar** |
| Alojamiento / DNS | **Cloudflare** — [dashboard del dominio](https://dash.cloudflare.com/f7e837d2e42f8b8c70339f9bd32ef082/domains/overview) |
| Repositorio | GitHub, usuario `arianacotrone` — https://github.com/arianacotrone/espar-co/tree/main |
| WhatsApp del formulario y del botón flotante | `+54 9 11 4188-9724` (`5491141889724` en `assets/js/contacto.js` e `index.html`) — **confirmá que sea el número correcto**, quedó como estaba en el original |
| Email de contacto (footer) | `hola@esparco.com.ar` — **confirmá que esta casilla exista** antes de publicar, o reemplazala por la que uses |
| LinkedIn | https://www.linkedin.com/in/arianaecotrone/ |
| GitHub | https://github.com/arianacotrone |
| Instagram | https://www.instagram.com/esparco.data/ |

> ⚠️ El archivo `CNAME` en la raíz (con el contenido `esparco.com.ar`) es la convención que usa **GitHub Pages** para dominios personalizados. Si el sitio hoy se sirve así (GitHub Pages + Cloudflare solo como DNS/proxy), este archivo tiene que seguir existiendo tal cual. Si en algún momento pasaste el hosting a **Cloudflare Pages**, ese archivo ya no cumple ninguna función ahí — confirmalo vos misma revisando cómo está conectado el dominio hoy, porque no quedó explícito en lo que tengo.

## Cómo está armado

Sitio 100% estático — no hay backend, no hay build, no hay dependencias que instalar. Se edita el HTML/CSS/JS y se sube tal cual.

```
espar-co-main/
├── CNAME                  → dominio personalizado (ver nota arriba)
├── README.md               → este archivo
├── index.html              → página principal
├── proyectos/index.html    → portafolio completo, con filtros
└── assets/
    ├── css/style.css       → todos los estilos (un solo archivo)
    ├── js/
    │   ├── main.js         → menú mobile
    │   ├── contacto.js     → arma el link de wa.me con los datos del formulario
    │   └── proyectos.js    → filtro de industria/herramienta en /proyectos
    └── img/                → logo, foto, íconos
```

**No hay servidor ni base de datos en ningún lado.** El formulario de contacto no envía nada — solo arma un link de WhatsApp prellenado (`wa.me/...`) y lo abre en una pestaña nueva. Si algún día querés guardar los contactos en algún lado (una planilla, un CRM), ahí sí hace falta agregar algo — hoy no existe.

## Dónde tocar cada cosa

- **Colores de marca**: todos definidos como variables al principio de `assets/css/style.css`, dentro de `:root` — `--navy`, `--navy-deep`, `--cyan`, etc. Cambiás el valor ahí una sola vez y se actualiza en todo el sitio.
- **Tipografía**: Montserrat, cargada desde Google Fonts (el `<link>` está en el `<head>` de cada página).
- **Textos del hero, de Servicios y de Sobre mí**: directamente en `index.html`, cada sección con su comentario `<!-- ===== NOMBRE ===== -->` para ubicarla rápido.
- **Tarjetas del portafolio**: en `index.html` (preview de 4 tarjetas) y en `proyectos/index.html` (portafolio completo con filtros) — son las mismas tarjetas, duplicadas a mano en ambos archivos, así que un cambio de copy hay que hacerlo en los dos lugares.
- **Filtros de industria/herramienta**: los botones están en `proyectos/index.html`; la lógica que los hace funcionar está en `assets/js/proyectos.js` (filtra por los atributos `data-industry` y `data-tools` de cada tarjeta).
- **Número de WhatsApp**: `assets/js/contacto.js` (constante `WHATSAPP_NUMBER`) y el botón flotante en `index.html` — son dos lugares distintos, si lo cambiás actualizalo en ambos.

## Pendientes marcados en el código (buscá `TODO` en los archivos)

1. Confirmar el email `hola@esparco.com.ar` antes de publicar (o reemplazarlo).
2. Confirmar que el número de WhatsApp cargado sea el correcto.
3. Reemplazar la tarjeta placeholder "Tu primer caso PyME va acá" (en `index.html` y `proyectos/index.html`) apenas tengas tu primer caso real de Fase 0-2 — ver `consultoria/proyectos-de-portafolio.md` en el proyecto de Claude para las recomendaciones de qué proyecto armar primero.
4. Confirmar el nombre del repositorio de GitHub para completar la tabla de arriba.

## Contexto y estrategia (no vive en este repo)

Las decisiones de marca, posicionamiento y todo el razonamiento detrás de estos textos están documentadas aparte, en el proyecto "UTN - Resumen Carrera" de Claude:

- `consultoria/marca-espar-co.md` — estrategia de marca completa (ICP, pitch, pricing, canales).
- `consultoria/auditoria-web-esparco.md` — auditoría del sitio anterior y el checklist que se usó para esta reconstrucción.
- `consultoria/proyectos-de-portafolio.md` — qué proyectos de portafolio construir y precargar.

Si volvés a este sitio en unos meses y no te acordás por qué algo dice lo que dice, esos tres documentos son el punto de partida.
