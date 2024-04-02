import React, { useEffect, useState } from "react";
import { RandomAvatar } from "react-random-avatars";
import css from "./Nav.module.css";

function Nav() {
  const [show, setShow] = useState(false);

  const transiteNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transiteNavBar)
    return () => window.removeEventListener('scroll', transiteNavBar)
  }, [])
  return (
    <div className={`${css.nav} ${show && css.nav__black}`}>
      <div className={css.nav__contents}>
        <img
          className={css.nav__logo}
          src="https://res.cloudinary.com/dlw7wjlp3/image/upload/v1712060339/wetflix_hdmzms.png"
          alt="wetflix-logo"
        />
        <div className={css.nav__avatar}>
          <RandomAvatar name="Default Name" size={40} mode="random" />
        </div>
      </div>
    </div>
  );
}

export default Nav;
