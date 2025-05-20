<script>
  document.addEventListener("DOMContentLoaded", () => {
    const sortSelect = document.getElementById("sortSelect");
    const container = document.querySelector(".container");

    sortSelect.addEventListener("change", () => {
      const sortOrder = sortSelect.value; // 'asc' sau 'desc'
      const movies = Array.from(document.querySelectorAll(".movie-card"));

      movies.sort((a, b) => {
        const ratingA = parseFloat(a.getAttribute("data-rating"));
        const ratingB = parseFloat(b.getAttribute("data-rating"));
        return sortOrder === "asc" ? ratingA - ratingB : ratingB - ratingA;
      });

      // Scoatem cardurile din container și le adăugăm în ordinea nouă
      movies.forEach(movie => container.appendChild(movie));
    });
  });
</script>