document.addEventListener('DOMContentLoaded', () => {
  // Găsește toate secțiunile de rating de pe pagină
  const allStarContainers = document.querySelectorAll('.star-rating');

  allStarContainers.forEach(container => {
    const stars = container.querySelectorAll('.star');

    stars.forEach(star => {
      star.addEventListener('click', () => {
        const ratingValue = parseInt(star.getAttribute('data-value'));

        // Eliminăm toate clasele selectate
        stars.forEach(s => s.classList.remove('selected'));

        // Adăugăm clasa selected până la steaua aleasă
        for (let i = 0; i < ratingValue; i++) {
          stars[i].classList.add('selected');
        }

        // (Opțional) poți salva ratingul în localStorage:
        // localStorage.setItem('rating_' + container.dataset.movieId, ratingValue);
      });
    });
  });
});
