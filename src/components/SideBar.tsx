import { Link } from "react-router-dom";
import clsx from "clsx";

interface SideBarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

const SideBar = ({ isMenuOpen, setIsMenuOpen }: SideBarProps) => {
  return (
    <div
      className={clsx(
        "absolute top-0 left-0 right-0 p-4 pt-20 h-screen bg-secondary z-[997] opacity-0 transition-opacity duration-150 ease-in md:hidden pointer-events-none",
        {
          "opacity-100 pointer-events-auto": isMenuOpen,
        }
      )}
      tabIndex={-1}
    >
      <nav className="flex flex-col gap-5 mt-20 text-xl font-semi-bold">
        <Link
          to="/"
          className="hover:opacity-60"
          onClick={() => setIsMenuOpen(false)}
        >
          Help
        </Link>
        <Link
          to="/"
          className="hover:opacity-60"
          onClick={() => setIsMenuOpen(false)}
        >
          Sign out
        </Link>
      </nav>
    </div>
  );
};

export default SideBar;
