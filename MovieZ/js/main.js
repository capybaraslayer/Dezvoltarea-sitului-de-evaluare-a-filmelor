const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const carouselItem = document.querySelector('.carousel-item');

let current = 0;

const slides = [
  {
    img: '../assets/images/MV5BMWQ4YWYxYTAtZTlhNC00Nzc3LWE3OWUtZjY5MThlNWNiYTBiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    title: 'Diego Luna on Cassian\'s Growth in "Andor" Season 2',
    desc: 'Watch our Star Wars Celebration Interview',
    likes: 270,
    hearts: 144
  },
  {
    img: '../assets/images/ironheart.jpg',
    title: 'Dominique Thorne in "Ironheart"',
    desc: 'Watch the new trailer',
    likes: 90,
    hearts: 72
  }
];

function updateSlide(index) {
  carouselItem.innerHTML = `
    <img src="${slides[index].img}" alt="">
    <div class="carousel-info">
      <h2>${slides[index].title}</h2>
      <p>${slides[index].desc}</p>
      <span>❤️ ${slides[index].hearts} 👍 ${slides[index].likes}</span>
    </div>
  `;
}

nextBtn.addEventListener('click', () => {
  current = (current + 1) % slides.length;
  updateSlide(current);
});

prevBtn.addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  updateSlide(current);
});
