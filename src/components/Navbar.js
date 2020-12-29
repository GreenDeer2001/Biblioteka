import React from "react";
import { NavLink } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { useBooksContext } from "../utilities/context";
import { useHistory, useLocation } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);
  const {
    isLoginHandler,
    setShowLoginForm,
    setGotoAccount,
  } = useBooksContext();
  const { pathname } = useLocation();
  const history = useHistory();

  const goToProfilHandler = async () => {
    if (await isLoginHandler) {
      await history.push("/konto");
    } else {
      await setGotoAccount(true);
      await setShowLoginForm(true);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__center">
        <div className="navbar__logo-box">
          <NavLink className="navbar__logo" to="/">
            Biblioteka miejska
          </NavLink>
          <button className="navbar__btn" onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <FaTimes className="navbar__btn-icon" />
            ) : (
              <FaBars className="navbar__btn-icon" />
            )}
          </button>
        </div>
        <ul className={`navbar__links ${toggle && "active"}`}>
          <li className="navbar__link">
            <NavLink to="/" exact>
              Nowości
            </NavLink>
          </li>
          <li className="navbar__link">
            <NavLink to="/katalog">katalog</NavLink>
          </li>
          <li className="navbar__link">
            <NavLink to="/kontakt">Kontakt</NavLink>
          </li>
          <li className="navbar__link" onClick={goToProfilHandler}>
            <span className={`${pathname==="/konto" && "profilPageActive" }`}> Konto </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
