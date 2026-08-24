# Espar Co. — sitio web

Sitio estático (HTML/CSS/JS puro, sin framework ni build step) de **esparco.com.ar**.

## Lo que necesitás tener a mano

| Qué | Dato |
|---|---|
| Dominio | **esparco.com.ar** |
| Alojamiento / DNS | **Cloudflare**  |
| Repositorio | GitHub, usuario `arianacotrone` — https://github.com/arianacotrone/espar-co/tree/main |
| LinkedIn | https://www.linkedin.com/in/arianaecotrone/ |
| GitHub | https://github.com/arianacotrone |
| Instagram | https://www.instagram.com/esparco.data/ |

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

