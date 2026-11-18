# espar-co

Repo del sitio de esparco.com.ar. Esto son notas para mí, para cuando vuelva
a tocar esto en 3 meses y no me acuerde de nada.

Es HTML/CSS/JS a mano, nada de framework ni build. Edito y subo a `main`,
Cloudflare hace el resto (DNS + hosting apuntan para acá).

## Estructura

```
index.html              → home
proyectos/index.html    → portafolio, con filtros de industria/herramienta
assets/
  css/style.css          → todo el estilo, un solo archivo (se está poniendo largo, ojo)
  js/main.js             → menú mobile (hamburguesa)
  js/contacto.js         → arma el link de wa.me con lo que carga el formulario de contacto
  js/proyectos.js        → filtro de /proyectos — las cards NECESITAN data-industry y
                           data-tools en el <article>, sino el filtro no encuentra nada
                           y queda pegado en "0 de 0" (ya me pasó una vez)
  img/                   → logo, íconos
CNAME                    → dominio, no tocar
```

## Datos que se me olvidan siempre

- Dominio: esparco.com.ar — DNS en Cloudflare
- Repo: github.com/arianacotrone/espar-co
- LinkedIn: linkedin.com/in/arianaecotrone
- Instagram: instagram.com/esparco.data
- Mail de contacto del footer (hola@esparco.com.ar) — todavía no existe la casilla, falta crearla
- Botón de WhatsApp flotante — revisar que el número sea el correcto antes de mandarle el link a un cliente

## Para cuando retome esto

- "Sobre mí" no tiene foto mía a propósito — es un card con mis iniciales (AEC) sobre el
  degradado navy/cyan. No quiero mi cara en la home.
- El hero quedó así: "Automatizá tus procesos. Aclará tus decisiones." + el párrafo de abajo
  vendiendo el enfoque (dashboards primero, la aclaración de que sin datos ordenados no
  sirven de nada, después). Si lo vuelvo a escribir, que sea corto y directo — nada de
  bajada tipo consultora genérica.
- Portafolio: falta sumar casos reales a medida que los vaya cerrando. Faryco y España
  Cotrone ya están cargados; "Compra en tu Barrio" (el proyecto para la Cámara de Comercio
  de Rafael Calzada) todavía no tiene link, va como "en desarrollo".


## Reorganización en 3 caminos (1/9/2026)

El sitio pasó de ser un solo home a un hub con 3 verticales, cada una con su propia página:

```
index.html                    → hub: 3 tarjetas (PyMEs / Comercios / Automatización)
pymes/index.html               → ex-home: servicios en fases, portafolio (Tenaris, SistDeRec, cortes-enre), sobre mí, contacto
comercios/index.html           → ex-sección "Desarrollo Web": etapas, portafolio (Faryco, España Cotrone, Compra en tu Barrio), contacto
automatizaciones/index.html    → nueva línea: automatización puntual de Excel/VBA para oficinas chicas (contadores, inmobiliarias), pensada para vender por LinkedIn
proyectos/index.html           → portafolio completo, sin cambios de contenido (solo nav actualizada)
```

Todas comparten `assets/css/style.css` y `assets/js/main.js` (menú mobile). `contacto.js` lo siguen usando
pymes/ y comercios/ tal cual (el mensaje de WhatsApp se arma con lo que cargue el usuario, no depende de
las opciones del select). automatizaciones/ tiene su propio script de contacto inline porque el mensaje
de WhatsApp es distinto ("quiero automatizar una tarea en Excel").

Pendiente:
- Revisar que todos los links internos (portafolio, footer) sigan apuntando bien después de mover archivos
- El WhatsApp (5491141889724) es el mismo número para las 3 verticales — decidir si conviene separarlo
- automatizaciones/ todavía no tiene casos propios en el portafolio (es la línea más nueva)

## Paleta nueva + Calzada Digital protagonista (18/11/2026)

- Colores: ciruela `#4A2E8C` (principal) + naranja `#EE6718` (acento), con grafito `#2C2C2A`,
  lila `#AFA9EC` y hueso `#F1EFE8`. Todo vive en `:root` de `style.css`.
- Las variables ahora se llaman por ROL (`--brand`, `--accent`, `--accent-text`, `--grafito`…),
  no por color. Si la paleta cambia otra vez, se tocan solo esos valores.
- El LOGO y el NOMBRE van solo en violeta: ciruela + violeta medio `--brand-soft` (#6E5FC9).
  Nunca naranja ahí. Logo, ícono y favicon recoloreados así (misma "C" con circuito).
- El naranja es solo para RESALTAR poquitas cosas: la sección de Calzada Digital, el pill
  "Nuevo", el "En línea" del portafolio y la flecha del hero de /comercios.
  `--accent` (#EE6718) da 3.2:1 sobre blanco → solo detalles grandes; si va en texto chico,
  usar `--accent-text` (#B44A0C, 5.4:1).
- Links, eyebrows y "Etapa/Fase" usan `--brand-soft`.
- Footer en grafito para que no se funda con la sección violeta de Calzada.
- Calzada Digital (`.section-calzada`): mismo bloque en la home (abajo de las 3 tarjetas, con un
  pill "Nuevo" arriba que salta ahí) y en /comercios (antes de "Cómo trabajo"). Si se cambia el
  texto o el dibujo, cambiarlo en las DOS páginas.
- La ilustración del celular es un dibujo SVG, no una captura: no muestra comercios ni datos reales.
- En /proyectos la card de Calzada va primera, destacada y "En línea" (ya no "En desarrollo").
