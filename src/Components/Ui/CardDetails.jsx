import { NavLink, useLoaderData } from "react-router-dom";

export const CardDetails = () => {
  const data = useLoaderData();

  return (
    <div>
      {data.results.map((movie) => (
        <div key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h1>{movie.title}</h1>
          <h2>{movie.release_date}</h2>
          <h3>{movie.popularity}</h3>
          <h4>{movie.vote_average}</h4>
          <p>{movie.overview}</p>
        </div>
      ))}
      <NavLink to="/explore">Go Back</NavLink>
    </div>
  );
};
