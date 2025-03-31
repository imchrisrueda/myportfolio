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
  renderArticulos();
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
      <div class="articulo-header">
        <a href="${link}" target="_blank" class="articulo-titulo">${title}</a>
        <a href="${link}" target="_blank" class="articulo-icon" aria-label="Ver artículo">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 3h7m0 0v7m0-7L10 14m-4 0h4v4" />
          </svg>
        </a>
      </div>
      <p class="articulo-published">${published}</p>
      <p class="articulo-summary">${summary}</p>
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

//Certificados
const track = document.getElementById("carouselTrack");
const items = document.querySelectorAll(".carousel-item");
const clone = [...items].map(item => item.cloneNode(true));
clone.forEach(item => track.appendChild(item));


const container = document.querySelector(".carousel-container");

let isPaused = false;

function pauseAnimation() {
  track.style.animationPlayState = "paused";
  isPaused = true;
}

function resumeAnimation() {
  track.style.animationPlayState = "running";
  isPaused = false;
}

container.addEventListener('mouseenter', pauseAnimation);
container.addEventListener('mouseleave', resumeAnimation);

//Skills
document.querySelectorAll('.skill-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const arrow = header.querySelector('.arrow');

    // Mostrar u ocultar contenido
    content.classList.toggle('hidden');
    content.classList.toggle('visible');
    arrow.classList.toggle('rotate-180');

    // Resetear barra si se oculta
    if (!content.classList.contains('visible')) {
      const skillBars = content.querySelectorAll('.skill-bar-fill');
      skillBars.forEach(bar => {
        bar.style.width = '0';
      });
    }
  });
});

//Proyectos

const swiper = new Swiper('.destacado-galeria', {
  loop: true,
  pagination: {
    el: '.custom-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

document.addEventListener('DOMContentLoaded', () => {
  const steps = document.querySelectorAll('.progress-step');
  const done = document.querySelectorAll('.progress-step.done').length;
  const progressFill = document.querySelector('.progress-bar-fill');
  const label = document.querySelector('.progress-label');
  const total = steps.length;
  const percent = Math.round((done / total) * 100);

  progressFill.style.width = percent + '%';
  label.textContent = `Overall progress: ${percent}%`;
});

//Contacto
function copyEmail() {
  navigator.clipboard.writeText("christian.rueda@csic.es")
    .then(() => alert("Email copied to clipboard"))
    .catch(() => alert("Failed to copy email"));
}