/* ===========================
   MAIN.JS
   Loads all section HTML files
   and handles all interactions
   =========================== */

// ── Load HTML sections into their containers ──
async function loadSection(filePath, containerId) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`Failed to load ${filePath}`);
    const html = await response.text();
    document.getElementById(containerId).innerHTML = html;
  } catch (err) {
    console.error(err);
  }
}

// Load all four sections in order, then init interactions
async function loadAll() {
  await loadSection('header/header.html', 'header-container');
  await loadSection('banner/banner.html',  'banner-container');
  await loadSection('body/body.html',      'body-container');
  await loadSection('footer/footer.html',  'footer-container');
  initInteractions();
  initScrollReveal();
}

loadAll();


// ── Interactions ──
function initInteractions() {

  // Hamburger toggle
  window.toggleNav = function () {
    const nav = document.getElementById('navLinks');
    if (nav) nav.classList.toggle('open');
  };

  // Search
  window.doSearch = function () {
    const input = document.getElementById('searchInput');
    const q = input ? input.value.trim() : '';
    if (q) alert('Searching for: ' + q);
  };

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') window.doSearch();
    });
  }

  // Contact form submit
  window.submitForm = function () {
    const name  = document.getElementById('fName')?.value.trim();
    const email = document.getElementById('fEmail')?.value.trim();
    const msg   = document.getElementById('fMessage')?.value.trim();
    if (!name || !email || !msg) {
      alert('Please fill in all required fields.');
      return;
    }
    const formMsg = document.getElementById('formMsg');
    if (formMsg) formMsg.style.display = 'block';
    document.getElementById('fName').value    = '';
    document.getElementById('fEmail').value   = '';
    document.getElementById('fMessage').value = '';
  };

  // Newsletter subscribe
  window.subscribe = function () {
    const emailEl = document.getElementById('subEmail');
    if (!emailEl || !emailEl.value.trim()) return;
    const msg = document.getElementById('subMsg');
    if (msg) msg.style.display = 'block';
    emailEl.value = '';
  };
}


// ── Scroll Reveal ──
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));
}/* ===========================
   MAIN.JS
   Loads all section HTML files
   and handles all interactions
   =========================== */

// ── Load HTML sections into their containers ──
async function loadSection(filePath, containerId) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`Failed to load ${filePath}`);
    const html = await response.text();
    document.getElementById(containerId).innerHTML = html;
  } catch (err) {
    console.error(err);
  }
}

// Load all four sections in order, then init interactions
async function loadAll() {
  await loadSection('header/header.html', 'header-container');
  await loadSection('banner/banner.html',  'banner-container');
  await loadSection('body/body.html',      'body-container');
  await loadSection('footer/footer.html',  'footer-container');
  initInteractions();
  initScrollReveal();
}

loadAll();


// ── Interactions ──
function initInteractions() {

  // Hamburger toggle
  window.toggleNav = function () {
    const nav = document.getElementById('navLinks');
    if (nav) nav.classList.toggle('open');
  };

  // Search
  window.doSearch = function () {
    const input = document.getElementById('searchInput');
    const q = input ? input.value.trim() : '';
    if (q) alert('Searching for: ' + q);
  };

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') window.doSearch();
    });
  }

  // Contact form submit
  window.submitForm = function () {
    const name  = document.getElementById('fName')?.value.trim();
    const email = document.getElementById('fEmail')?.value.trim();
    const msg   = document.getElementById('fMessage')?.value.trim();
    if (!name || !email || !msg) {
      alert('Please fill in all required fields.');
      return;
    }
    const formMsg = document.getElementById('formMsg');
    if (formMsg) formMsg.style.display = 'block';
    document.getElementById('fName').value    = '';
    document.getElementById('fEmail').value   = '';
    document.getElementById('fMessage').value = '';
  };

  // Newsletter subscribe
  window.subscribe = function () {
    const emailEl = document.getElementById('subEmail');
    if (!emailEl || !emailEl.value.trim()) return;
    const msg = document.getElementById('subMsg');
    if (msg) msg.style.display = 'block';
    emailEl.value = '';
  };
}


// ── Scroll Reveal ──
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));
}