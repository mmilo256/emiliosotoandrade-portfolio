import Socials from "./Socials";
import Logo from "./Logo";
import MenuToggler from "./MenuToggler";
import { useEffect, useState } from "react";

const navigation = [
  {
    label: "Inicio",
    href: "#home",
  },
  {
    label: "Proyectos",
    href: "#projects",
  },
  {
    label: "Servicios",
    href: "#services",
  },
  {
    label: "Sobre mi",
    href: "#about",
  },
  {
    label: "Contacto",
    href: "#contact",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleNavbarOpacity);
  }, [scrollY]);

  const handleNavbarOpacity = () => {
    setScrollY(window.scrollY);
  };

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className={`fixed z-50 transition-all bg-opacity-100 duration-200 w-full bg-slate-900 ${
          scrollY > 150 ? "md:bg-opacity-100" : "md:bg-opacity-0"
        }`}
      >
        <div className="container m-auto px-2 md:px-0 grid grid-cols-2 md:grid-cols-6 h-16">
          <div className=" flex items-center">
            <Logo />
          </div>
          {/* Navegación en pantallas grandes */}
          <ul className="hidden col-span-4 md:items-center md:justify-center md:flex text-mainwhite">
            {navigation.map((item) => (
              <li
                className="hover:text-primary py-2 px-4 active:text-primary transition-all hover:cursor-pointer duration-200 hover:scale-110 active:scale-110"
                key={item.label}
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden md:flex md:items-center justify-end">
            <Socials />
          </div>
          <div className="md:hidden flex justify-end text-right">
            <MenuToggler isOpen={isOpen} onClick={handleToggleMenu} />
          </div>
        </div>
      </nav>
      {
        /** Navegación en pantallas pequeñas */
        isOpen && (
          <ul
            className={`md:hidden overflow-hidden fixed z-50 bg-slate-900 w-full top-16 text-mainwhite gap-5`}
          >
            {navigation.map((item) => (
              <li key={item.label}>
                <a
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="block text-2xl text-center active:bg-slate-800 py-6 font-light transition-all hover:scale-125"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <div
              onClick={() => {
                setIsOpen(false);
              }}
              className="flex justify-center py-5 border-t border-slate-800"
            >
              <Socials size="large" />
            </div>
          </ul>
        )
      }
    </>
  );
}

export default Navbar;
