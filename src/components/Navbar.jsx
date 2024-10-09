import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import logo from "../assets/Image.png";
import { TiShoppingCart } from "react-icons/ti";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <>
      <nav className="flex p-3 items-center justify-between gap-10 bg-[#FFFFFF]">
        <div className="flex items-center gap-1 font-semibold">
          <img src={logo} alt="" />
          <h1 className="text-2xl cursor-default">ElectroMart</h1>
        </div>

        <div className={`navigation  flex-col  lg:flex-row flex ${menu ? "open" : ""}`}>
          <ul className={`flex  flex-col lg:flex-row text-[#565E6C] text-xl gap-3 pr-3`}>
            <li className="hover:text-[#636AE8]" onClick={closeMenu}>
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-[#636AE8]" onClick={closeMenu}>
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-[#636AE8]" onClick={closeMenu}>
              <Link to="/shop">Shop</Link>
            </li>
            <li className="hover:text-[#636AE8]" onClick={closeMenu}>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>

          {/* search bar and other icons */}
          <div className="flex p- items-center gap-2">
            <input className="border outline-none pl-1 border-black" type="search" placeholder="searach an item " />
            <BiSearchAlt size={25} />
            <TiShoppingCart size={25} />
          </div>
        </div>

        <CiMenuBurger className="hamburger" onClick={toggleMenu} size={30} />
      </nav>
    </>
  );
}

export default Navbar;
