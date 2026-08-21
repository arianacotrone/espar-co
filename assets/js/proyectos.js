// Espar Co. — filtro de portafolio por industria / herramienta
document.addEventListener('DOMContentLoaded', function () {
  var cards = Array.prototype.slice.call(document.querySelectorAll('.project-card[data-industry]'));
  var chips = Array.prototype.slice.call(document.querySelectorAll('.chip'));
  var visibleEl = document.querySelector('.results-visible');
  var totalEl = document.querySelector('.results-total');
  var noResults = document.querySelector('.no-results');
  var totalCount = cards.length;

  if (totalEl) totalEl.textContent = totalCount;

  var state = { industry: 'Todas', tool: 'Todas' };

  function applyFilters() {
    var visible = 0;

    cards.forEach(function (card) {
      var industry = card.getAttribute('data-industry');
      var tools = (card.getAttribute('data-tools') || '').split(',');

      var matchesIndustry = state.industry === 'Todas' || industry === state.industry;
      var matchesTool = state.tool === 'Todas' || tools.indexOf(state.tool) !== -1;
      var isVisible = matchesIndustry && matchesTool;

      card.hidden = !isVisible;
      if (isVisible) visible += 1;
    });

    if (visibleEl) visibleEl.textContent = visible;
    if (noResults) noResults.classList.toggle('is-visible', visible === 0);
  }

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var group = chip.getAttribute('data-filter-group');
      var value = chip.getAttribute('data-filter-value');
      state[group] = value;

      chips
        .filter(function (c) { return c.getAttribute('data-filter-group') === group; })
        .forEach(function (c) { c.classList.toggle('is-active', c === chip); });

      applyFilters();
    });
  });

  applyFilters();
});
