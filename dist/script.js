// ======== Плавное появление элементов при скролле ========
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));


// ======== Плавный скролл к секциям ========
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});


// ======== Кнопка "Наверх" ========
const toTop = document.createElement('button');
toTop.textContent = '↑';
toTop.className = 'to-top';
document.body.appendChild(toTop);

window.addEventListener('scroll', () => {
  if (window.scrollY > 600) {
    toTop.classList.add('visible');
  } else {
    toTop.classList.remove('visible');
  }
});

toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});