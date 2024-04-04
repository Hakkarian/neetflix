import React from "react";
import HeaderCss from "./Banner.styled.jsx";

function Banner() {
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <HeaderCss
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://res.cloudinary.com/dlw7wjlp3/image/upload/v1712067527/wetflixbg_u2kabm.jpg")`,
        backgroundPosition: "center center",
        color: "#ffffff",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
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
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam assumenda pariatur inventore impedit error, blanditiis molestias excepturi nulla ullam? Dolorum eveniet vero nisi sit. Animi iusto incidunt omnis delectus aliquid.",
            150
          )}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </HeaderCss>
  );
}

export default Banner;
