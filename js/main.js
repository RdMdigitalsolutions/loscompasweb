'use strict';

(function () {
  const money = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' });
  const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);
  const price = (value) => money.format(value);
  const peppers = (level) => level ? '🌶️'.repeat(level) : '';

  function applyRestaurantData() {
    const pageUrl = window.restaurant.siteUrl || window.location.href.split('#')[0];
    const canonical = document.querySelector('link[rel="canonical"]');
    canonical.href = pageUrl;
    document.querySelector('meta[property="og:url"]').content = pageUrl;
    document.querySelector('meta[property="og:image"]').content = new URL('assets/images/logo-los-compas.png', pageUrl).href;
    document.querySelectorAll('[data-link="whatsapp"]').forEach((link) => { link.href = window.restaurant.whatsapp; });
    document.querySelectorAll('[data-link="maps"]').forEach((link) => { link.href = window.restaurant.mapsUrl; });
    document.querySelectorAll('[data-link="phone"]').forEach((link) => { link.href = `tel:${window.restaurant.phoneInternational}`; });
    document.querySelectorAll('[data-text="phone"]').forEach((node) => { node.textContent = window.restaurant.phone; });
    document.querySelectorAll('[data-text="address"]').forEach((node) => { node.textContent = window.restaurant.address; });
    document.querySelectorAll('[data-text="city"]').forEach((node) => { node.textContent = window.restaurant.city; });
  }

  function itemLabels(item) {
    const labels = [];
    if (item.featured) labels.push('<span class="tag tag-hot">🔥 Más pedido</span>');
    if (item.spicyLevel) labels.push(`<span class="tag">${peppers(item.spicyLevel)} Picante ${item.spicyLevel}/3</span>`);
    if (item.vegetarian) labels.push('<span class="tag tag-green">● Vegetariano</span>');
    return labels.join('');
  }

  function renderMenu(filter = 'all') {
    const list = document.querySelector('#menu-list');
    const selected = window.menuItems.filter((item) => {
      if (filter === 'all') return true;
      if (filter === 'featured') return item.featured;
      if (filter === 'spicy') return item.spicyLevel > 0;
      if (filter === 'vegetarian') return item.vegetarian;
      return item.category === filter;
    });
    list.innerHTML = selected.map((item, index) => `
      <article class="menu-item" style="--delay:${Math.min(index, 8) * 30}ms">
        <div class="menu-item-title"><h3>${escapeHtml(item.name)}</h3><i></i><strong>${price(item.price)}</strong></div>
        <p>${escapeHtml(item.description)}</p><div class="tags">${itemLabels(item)}</div>
      </article>`).join('');
    document.querySelector('#results-status').textContent = `${selected.length} productos mostrados`;
  }

  function renderFavorites() {
    document.querySelector('#favorites-grid').innerHTML = window.menuItems.filter((item) => item.category === 'tacos' && item.featured).slice(0, 4).map((item, index) => `
      <article class="favorite-card reveal"><span class="card-index">0${index + 1}</span><span class="mini-flame">🔥</span><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.description)}</p><strong>${price(item.price)}</strong></article>`).join('');
  }

  function renderCombos() {
    document.querySelector('#combo-grid').innerHTML = window.combos.map((combo, index) => `
      <article class="combo-card reveal"><span class="combo-number">0${index + 1}</span><p>${escapeHtml(combo.label)}</p><h3>${escapeHtml(combo.name)}</h3><div class="dash"></div><small>${escapeHtml(combo.description)}</small><strong>${price(combo.price)}</strong></article>`).join('');
  }

  function renderSauces() {
    document.querySelector('#salsa-list').innerHTML = window.sauces.map((sauce, index) => `
      <article class="salsa-item reveal"><span class="sauce-drop sauce-${index + 1}" aria-hidden="true"></span><div><h3>${escapeHtml(sauce.name)}</h3><p>${escapeHtml(sauce.description)}</p><b>${sauce.spicyLevel ? peppers(sauce.spicyLevel) : 'Sin picante'}</b></div></article>`).join('');
  }

  function setupFilters() {
    document.querySelector('#menu-filters').addEventListener('click', (event) => {
      const button = event.target.closest('[data-filter]');
      if (!button) return;
      document.querySelectorAll('.filter').forEach((filterButton) => {
        const active = filterButton === button;
        filterButton.classList.toggle('is-active', active);
        filterButton.setAttribute('aria-pressed', String(active));
      });
      renderMenu(button.dataset.filter);
    });
  }

  function setupNavigation() {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('#main-nav');
    const setMenu = (open) => {
      nav.classList.toggle('is-open', open);
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.querySelector('.sr-only').textContent = open ? 'Cerrar menú' : 'Abrir menú';
    };
    toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
    nav.addEventListener('click', (event) => { if (event.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') { setMenu(false); toggle.focus(); } });
    document.addEventListener('click', (event) => { if (!event.target.closest('.nav-wrap')) setMenu(false); });
  }

  function setupReveal() {
    const elements = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
  }

  applyRestaurantData();
  renderFavorites();
  renderMenu();
  renderCombos();
  renderSauces();
  setupFilters();
  setupNavigation();
  setupReveal();
  document.querySelector('#year').textContent = new Date().getFullYear();
})();
