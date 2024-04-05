import React, { useEffect, useState } from "react";
import HeaderCss from "./Banner.styled.jsx";

import requests from "service/requests.js";
import instance from "service/http.js";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      console.log(requests.fetchNetflixOriginals);
      const request = await instance.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  console.log(movie);
  console.log(instance)
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <HeaderCss
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.poster_path}")`,
        backgroundPosition: "center center",
        color: "#ffffff",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button type="button" className="banner__button">
            Play
          </button>
          <button type="button" className="banner__button">
            My List
          </button>
        </div>
        <h1 className="banner__description">
          {truncate(
            movie?.overview,
            150
          )}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </HeaderCss>
  );
}

export default Banner;
