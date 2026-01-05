import React from "react";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${encodeURIComponent(movie.title)}`);
  };

  return (
    <div
      className="movie-card"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <img src={movie.posterURL} alt={movie.title} className="movie-poster" />
      <h3>{movie.title}</h3>
      <p>⭐ {movie.rating}</p>
    </div>
  );
}

export default MovieCard;
