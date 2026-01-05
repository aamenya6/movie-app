import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import MovieDetails from "./components/MovieDetails";
import "./index.css";

// Local images
import inceptionImg from "./assets/inception.jpg";
import breakingBadImg from "./assets/breakingbad.jpg";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description:
        "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.",
      posterURL: inceptionImg,
      rating: 5,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      title: "Breaking Bad",
      description:
        "A high school chemistry teacher turned methamphetamine producer navigates crime and danger.",
      posterURL: breakingBadImg,
      rating: 4,
      trailer: "https://www.youtube.com/embed/HhesaQXLuRY",
    },
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  const addMovie = (movie) => setMovies([...movies, movie]);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div className="app-container">
              <div className="hero-section">
                <h1>🎬 Welcome to My Movie App</h1>
                <p>Discover and share your favorite movies and TV shows!</p>
              </div>
              <AddMovie addMovie={addMovie} />
              <Filter
                setTitleFilter={setTitleFilter}
                setRatingFilter={setRatingFilter}
              />
              <MovieList movies={filteredMovies} />
            </div>
          }
        />

        {/* Movie Details Page */}
        <Route
          path="/movie/:title"
          element={<MovieDetails movies={movies} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
