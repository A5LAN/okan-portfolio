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

  // Theme toggle button
  const themeBtn = document.querySelector('#themeToggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      document.body.classList.add('transitioning');
      setTimeout(() => {
        document.body.classList.toggle('light-theme');
        document.body.classList.remove('transitioning');
      }, 50);
    });
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
