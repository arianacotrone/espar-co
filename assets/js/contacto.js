// Espar Co. — formulario de contacto: arma un mensaje de WhatsApp con los datos cargados.
// No envía ni guarda nada en un servidor: solo abre wa.me con el texto precargado.
// El form puede definir data-intro="..." para personalizar la primera línea del mensaje
// (por ejemplo, distinta en /pymes, /comercios y /automatizaciones).
(function () {
  // TODO: reemplazá por tu número real de WhatsApp (formato 549 + código de área sin 0 + número sin 15)
  var WHATSAPP_NUMBER = '5491141889724';

  document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contacto-form');
    if (!form) return;

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var nombre = document.getElementById('nombre').value.trim();
      var area = document.getElementById('area').value;
      var detalle = document.getElementById('detalle').value.trim();
      var intro = form.getAttribute('data-intro') || 'Hola, quiero hacer una consulta.';

      var lineas = [
        intro,
        'Nombre: ' + (nombre || 'Sin especificar'),
        'Consulta: ' + (area || 'Sin especificar')
      ];
      if (detalle) lineas.push('Detalle: ' + detalle);

      var mensaje = encodeURIComponent(lineas.join('\n'));
      window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + mensaje, '_blank', 'noopener');
    });
  });
})();
