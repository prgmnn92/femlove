import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";
import Container from "./Container";
import cn from "classnames";

const NavLink = ({ href, children }) => {
  return (
    <Link
      className="block py-2 pl-2 pr-3 text-gray-700 rounded hover:text-f-green md:hover:bg-transparent md:border-0 md:hover:text-f-green md:p-0 transition-all"
      href={href}
    >
      {children}
    </Link>
  );
};

const Navigation = ({ openModal }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded fixed top-0 left-0 right-0">
      <Container className="flex flex-wrap items-center justify-between">
        <Link href={"/"}>
          <Image
            src={"/logos/brand.png"}
            alt="Brand Logo"
            width={90}
            height={90}
          />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-f-green rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-f-offwhite"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={handleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={cn({
            "w-full md:block md:w-auto": true,
            hidden: toggleMenu,
          })}
          id="navbar-default"
        >
          <ul className="flex flex-col items-center p-4 mt-4 border border-gray-100 rounded-lg bg-f-offwhite md:flex-row md:space-x-8 md:mt-0 md:text-sm md:border-0 md:bg-white ">
            <li>
              <NavLink href={"/blog"}>Blog</NavLink>
            </li>
            <li>
              <NavLink href={"/empfehlungen"}>Empfehlungen</NavLink>
            </li>
            <li>
              <NavLink href={"/ueber-mich"}>Über Mich</NavLink>
            </li>
            <li>
              <NavLink href={"/kontakt"}>Kontakt</NavLink>
            </li>
            <li>
              <Button
                className={"bg-black text-white ml-2"}
                onClick={() => openModal()}
              >
                Subscribe
              </Button>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
