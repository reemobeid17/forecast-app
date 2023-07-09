import { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import SideBar from "./SideBar";
import HambugerMenuIcon from "../assets/icons/hamburger-menu.svg";
import CloseIcon from "../assets/icons/close.svg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full bg-white">
      <div className="flex items-center justify-between mx-auto my-4 px-4">
        <div className="relative z-[1000] py-2" role="button">
          <Link
            to="/"
            className={clsx("uppercase font-bold text-2xl", {
              "text-primary": isMenuOpen,
              "text-secondary": !isMenuOpen,
            })}
            aria-label="Whether.io"
          >
            Whether.io
          </Link>
        </div>
        <nav className="hidden md:flex md:gap-3 text-lg">
          <Link to="/help" className="hover:opacity-60">
            Help
          </Link>
          <Link to="/" className="hover:opacity-60">
            Sign out
          </Link>
        </nav>
        <button className="block  z-[1000] md:hidden" onClick={toggleMenu}>
          <img
            className={clsx({
              "animate-spin-once": isMenuOpen,
              "animate-spin-once-reverse": !isMenuOpen,
            })}
            alt="Close or Hambuger icon"
            src={isMenuOpen ? CloseIcon : HambugerMenuIcon}
          />
        </button>
        <SideBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </header>
  );
};

export default NavBar;
