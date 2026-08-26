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
