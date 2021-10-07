import React from "react";
import API from "../services/API";

const GameSearch = () => {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    API.getGames();
  };

  return (
    <form onSubmit={handleSearch}>
      <button type="submit">Submit</button>
    </form>
  );
};

export default GameSearch;
