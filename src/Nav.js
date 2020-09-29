import React, { useState, useEffect, handleShow } from "react";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://previews.123rf.com/images/vectorstockcompany/vectorstockcompany1808/vectorstockcompany180816461/108456717-chat-bot-vector-icon-isolated-on-transparent-background-chat-bot-logo-concept.jpg"
        alt="Netflix Avatar"
      />
    </div>
  );
}

export default Nav;
