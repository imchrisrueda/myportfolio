// script.js

const themeToggleBtn = document.querySelector('.theme-toggle');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (userPrefersDark) {
  document.body.classList.add('dark');
}

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Añadir clase activa al hacer clic
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Resaltar el enlace correspondiente al hacer scroll
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Cargar artículos
document.addEventListener('DOMContentLoaded', () => {
  renderArticulos(); // Usa el selector por defecto
});
function renderArticulos(selector = '#articulos') {
  const container = document.querySelector(selector);
  if (!container) return;

  const articulos = container.querySelectorAll('.articulo');

  articulos.forEach(div => {
    const title = div.dataset.title;
    const published = div.dataset.published;
    const summary = div.dataset.summary;
    const link = div.dataset.link;

    div.innerHTML = `
      <div class="flex items-center justify-between">
        <a href="${link}" target="_blank" class="articulo-titulo hover:underline">
          ${title}
        </a>
        <a href="${link}" target="_blank" class="text-gray-400 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" aria-label="Ver artículo">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M14 3h7m0 0v7m0-7L10 14m-4 0h4v4" />
          </svg>
        </a>
      </div>
      <p class="text-sm text-gray-600 dark:text-gray-300">${published}</p>
      <p class="mt-2 text-gray-800 dark:text-gray-300">${summary}</p>
    
  `;
  
  });
}
// Timeline tabs toggle
document.addEventListener('DOMContentLoaded', () => {
  const academicBtn = document.getElementById('tab-academic');
  const professionalBtn = document.getElementById('tab-professional');
  const academicTimeline = document.getElementById('academic-timeline');
  const professionalTimeline = document.getElementById('professional-timeline');

  academicBtn.addEventListener('click', () => {
    academicBtn.classList.add('active-tab');
    professionalBtn.classList.remove('active-tab');
    academicTimeline.classList.add('active');
    professionalTimeline.classList.remove('active');
  });

  professionalBtn.addEventListener('click', () => {
    professionalBtn.classList.add('active-tab');
    academicBtn.classList.remove('active-tab');
    professionalTimeline.classList.add('active');
    academicTimeline.classList.remove('active');
  });
});


