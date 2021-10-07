import React from "react";
import API from "../services/API";

const GameSearch = () => {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    API.getGames();
  };

  return (
    <form onSubmit={handleSearch}>
      <button className="m-4 bg-blue-400" type="submit">
        Submit
      </button>
    </form>
  );
};

export default GameSearch;
