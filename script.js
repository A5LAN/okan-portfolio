// Toggle visibility of projects
function toggleProjects() {
  const projects = document.querySelectorAll('.project');
  projects.forEach(proj => {
    proj.style.display = (proj.style.display === 'none' || proj.style.display === '') ? 'block' : 'none';
  });
}

// Toggle Light/Dark Theme
function toggleTheme() {
  document.body.classList.toggle('light-theme');
}

document.addEventListener('DOMContentLoaded', () => {
  // Theme button listener
  const themeBtn = document.querySelector('.theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }

  // Typing animation
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
// Toggle visibility of projects
function toggleProjects() {
  const projects = document.querySelectorAll('.project');
  projects.forEach(proj => {
    proj.style.display = (proj.style.display === 'none' || proj.style.display === '') ? 'block' : 'none';
  });
}

// Toggle Light/Dark Theme
function toggleTheme() {
  document.body.classList.toggle('light-theme');
}

document.addEventListener('DOMContentLoaded', () => {
  // Theme button listener
  const themeBtn = document.querySelector('.theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }

  // Typing animation
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
