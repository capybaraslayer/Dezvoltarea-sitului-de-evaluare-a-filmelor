// Încarcă navbar și footer din fișiere HTML și le inserează în pagină
document.addEventListener("DOMContentLoaded", () => {
  const loadComponent = (selector, url) => {
    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error(`Failed to load ${url}`);
        return response.text();
      })
      .then(data => {
        document.querySelector(selector).innerHTML = data;
        highlightActiveLink();
      })
      .catch(e => console.error(e));
  };

  loadComponent('#navbar-placeholder', '/components/navbar.html');
  loadComponent('#footer-placeholder', '/components/footer.html');

  // Evidențiază link-ul activ din navbar
  function highlightActiveLink() {
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('href') === currentPath || currentPath.endsWith(link.getAttribute('href'))) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
});
