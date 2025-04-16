document.addEventListener('DOMContentLoaded', () => {
  // Project toggle button
  const projectToggleBtn = document.querySelector('.toggle-btn');
  const projects = document.querySelectorAll('.project');

  if (projectToggleBtn) {
    projectToggleBtn.addEventListener('click', () => {
      projects.forEach(project => {
        project.classList.toggle('hidden');
      });
    });
  }

  // Theme toggle button with emoji swap and localStorage
  const themeBtn = document.querySelector('#theme-toggle');

  const setThemeIcon = () => {
    const isLight = document.body.classList.contains('light-theme');
    themeBtn.textContent = isLight ? '☀️' : '🌙';
  };

  // Load theme preference
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
  }
  setThemeIcon();

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      document.body.classList.add('transitioning');
      setTimeout(() => {
        const isLight = document.body.classList.toggle('light-theme');
        document.body.classList.remove('transitioning');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        setThemeIcon();
      }, 50);
    });
  }

  // Show arrow after scrolling past the #about section
  window.addEventListener('scroll', () => {
    const aboutSection = document.getElementById('about');
    const scrollArrow = document.getElementById('scrollToTop');

      if (!aboutSection || !scrollArrow) return;

    const triggerPoint = aboutSection.offsetTop + aboutSection.offsetHeight;

      if (window.scrollY > triggerPoint) {
      scrollArrow.classList.add('visible');
      } else {
        scrollArrow.classList.remove('visible');
      }
    });

// Smooth scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

  // Typing animation in header
  const headerText = document.querySelector('header h1');
  if (headerText) {
    const text = headerText.innerText;
    headerText.innerText = '';
    let i = 0;
    const typeWriter = setInterval(() => {
      headerText.innerText += text[i];
      i++;
      if (i >= text.length) clearInterval(typeWriter);
    }, 100);
  }

  // Fade-in for proficiency items
  const items = document.querySelectorAll('.proficiency-item');
  items.forEach((item, i) => {
    item.style.opacity = 0;
    setTimeout(() => {
      item.style.transition = 'opacity 0.6s ease-in';
      item.style.opacity = 1;
    }, i * 150);
  });
});
