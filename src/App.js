import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import inceptionImg from "./assets/inception.jpg";
import breakingBadImg from "./assets/breakingbad.jpg";
import "./index.css";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "Dream within a dream",
      posterURL: inceptionImg,
      rating: 5,
    },
    {
      title: "Breaking Bad",
      description: "A chemistry teacher turns criminal",
      posterURL: breakingBadImg,
      rating: 4,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  return (
    <div className="app-container">
      <h1>🎬 My Favorite Movies & TV Shows</h1>
      <AddMovie addMovie={addMovie} />
      <Filter
        setTitleFilter={setTitleFilter}
        setRatingFilter={setRatingFilter}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
