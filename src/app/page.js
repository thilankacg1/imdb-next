import React from "react";
import Result from "./components/Results/Result";

const API_KEY = process.env.API_KEY;

const Home = async ({ searchParams }) => {
  const genre = searchParams.genre || "fetchTrending";

  const response = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  const data = await response.json();
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const results = data.results;
  console.log(results);
  return (
    <div>
      <Result results={results} />
    </div>
  );
};

export default Home;
