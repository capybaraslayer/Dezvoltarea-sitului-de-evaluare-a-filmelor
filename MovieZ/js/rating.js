document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.stars').forEach(starsContainer => {
    const rating = parseFloat(starsContainer.getAttribute('data-rating'));
    const maxStars = 5;
    starsContainer.innerHTML = '';
    for (let i = 1; i <= maxStars; i++) {
      const star = document.createElement('span');
      star.textContent = i <= rating ? '★' : '☆';
      star.style.color = '#f5c518';
      star.style.fontSize = '1.2rem';
      starsContainer.appendChild(star);
    }
  });
});
