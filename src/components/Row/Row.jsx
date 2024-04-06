import React, { useEffect, useState } from "react";
import { RowCss } from "./Row.styled";
import axios from "service/http";

function Row({ title, fetchURL, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);
    
    const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(fetchURL);
      setMovies(req.data.results);
      return req;
    }
    fetchData();
  }, [fetchURL]);

  console.log(movies);

  return (
    <RowCss>
      <h2 className="row__title">{title}</h2>
      {movies?.length > 0 && (
        <ul className="row__posters">
          {movies?.map(
            (movie) =>
              ((isLargeRow && movie.poster_path) ||
              (!isLargeRow &&
                movie.backdrop_path)) && (
                  <li key={movie?.id}>
                    <img
                      className={`row__poster ${
                        isLargeRow && "row__posterLarge"
                      }`}
                      src={`${baseUrl}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                      }`}
                      alt={movie?.title || movie?.name || movie?.original_name}
                    />
                    <p></p>
                  </li>
                ))
          }
        </ul>
      )}
    </RowCss>
  );
}

export default Row;
