import { Link } from "react-router-dom";
import data from "../data/navigation.json";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";

const Header = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  const handleClick = () => {
    setToggleIcon(false);
  };

  return (
    <header>
      <nav className="navigation">
        <div className="navigation_container">
          <Link to="/" className="navigation_container_logo">
            <img
              src="/images/logo-landing.png"
              alt="logo de david web projects"
              className="navigation_container_logo_img"
            />
            <h1>Portfolio</h1>
          </Link>
        </div>
        <ul
          className={`navigation_container_menu ${toggleIcon ? "active" : ""}`}
        >
          {data.map((item, index) => (
            <li key={"item" + index} className="navigation_container_menu_item">
              <Link
                to={item.link}
                className="navigation_container_menu_item_links"
                onClick={handleClick}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="menu_hamburger_icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={40} /> : <FaBars size={40} />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
