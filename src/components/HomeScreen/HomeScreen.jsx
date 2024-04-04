import React from "react";
import "./HomeScreen.module.css";
import Nav from "components/Nav/Nav";
import Banner from "components/Banner/Banner";

function HomeScreen() {
  return (
    <div className="homescreen">
      <Nav />
      <Banner />
      {/* Row */}
    </div>
  );
}

export default HomeScreen;
