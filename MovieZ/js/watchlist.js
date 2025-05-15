.movie-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.movie-card {
  background-color: #222;
  padding: 1rem;
  border-radius: 15px;
  width: 180px;
  text-align: center;
  transition: transform 0.2s;
  color: white;
}

.movie-card:hover {
  transform: translateY(-5px);
}

.movie-card img {
  width: 100%;
  border-radius: 10px;
}

.remove-btn {
  margin-top: 0.5rem;
  background-color: #e50914;
  color: white;
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
