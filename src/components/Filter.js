import React from "react";

function Filter({ setTitleFilter, setRatingFilter }) {
  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Filter by title"
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <select onChange={(e) => setRatingFilter(Number(e.target.value))}>
        <option value={0}>All Ratings</option>
        <option value={1}>⭐</option>
        <option value={2}>⭐⭐</option>
        <option value={3}>⭐⭐⭐</option>
        <option value={4}>⭐⭐⭐⭐</option>
        <option value={5}>⭐⭐⭐⭐⭐</option>
      </select>
    </div>
  );
}

export default Filter;
