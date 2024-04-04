import styled from "styled-components";

export const HeaderCss = styled.header`
  .banner {
    height: 30rem;
  }

  .banner__contents {
    margin-left: 2rem;
    padding-top: 9rem;
    height: 12rem;
  }

  .banner__title {
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.3rem;
  }

  .banner__description {
    width: 45rem;
    line-height: 1.3;
    padding-top: 1rem;
    font-size: 0.8rem;
    max-width: 22rem;
    height: 5rem;
  }

  .banner--fadeBottom {
    height: 9.25rem;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(37, 37, 37, 0.61),
      #111
    );
  }

  .banner__buttons {
    display: flex;
    gap: 0.5rem;
  }

  .banner__button {
     &:hover, &:focus {
        color: darkred;
        background-color: #000;
        border-radius: 2rem 1rem;
     }
  }
`;

export default HeaderCss;

