import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 z-50 w-full h-20 flex justify-between items-center px-10 transition-all duration-300 shadow-sm ${
        isScrolled
          ? "bg-white/50 backdrop-blur-md shadow-lg border-indigo-100"
          : "bg-white border-transparent"
      }`}
    >
      <Logo />
      <Menu />
    </nav>
  );
};

export default Navbar;
