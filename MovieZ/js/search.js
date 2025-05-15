function searchMovies() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".movie-card");

  cards.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    card.style.display = title.includes(input) ? "block" : "none";
  });
}

function filterByGenre() {
  const genre = document.getElementById("genreFilter").value;
  const cards = document.querySelectorAll(".movie-card");

  cards.forEach(card => {
    const cardGenre = card.dataset.genre.toLowerCase();
    card.style.display = (genre === "toate" || cardGenre === genre) ? "block" : "none";
  });
}
