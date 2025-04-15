// Toggle Project Visibility
function toggleProjects() {
  const projects = document.querySelectorAll('.project');
  projects.forEach(proj => {
    proj.style.display = (proj.style.display === 'none') ? 'block' : 'none';
  });
}

// Fun animation when page loads
document.addEventListener('DOMContentLoaded', () => {
  const headerText = document.querySelector('header h1');
  let text = headerText.innerText;
  headerText.innerText = '';
  
  let i = 0;
  const typeWriter = setInterval(() => {
    headerText.innerText += text[i];
    i++;
    if (i > text.length - 1) {
      clearInterval(typeWriter);
    }
  }, 100); // typing speed
});
