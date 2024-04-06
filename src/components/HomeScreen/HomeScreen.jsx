import React from "react";
import Nav from "components/Nav/Nav";
import Banner from "components/Banner/Banner";
import requests from "service/requests";
import Row from "components/Row/Row";
import HomeScreenCss from "./HomeScreen.styled";

function HomeScreen() {
  return (
    <HomeScreenCss>
      <Nav />
      <Banner />
      <ul>
        <li>
          <Row
            title="NEETFLIX ORIGINALS"
            fetchURL={requests.fetchNetflixOriginals}
            isLargeRow
          />
        </li>
        <li>
          <Row title="Trending now" fetchURL={requests.fetchTrending} />
        </li>
        <li>
          <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
        </li>
        <li>
          <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
        </li>
        <li>
          <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
        </li>
        <li>
          <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
        </li>
        <li>
          <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
        </li>
        <li>
          <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
        </li>
      </ul>
    </HomeScreenCss>
  );
}

export default HomeScreen;
