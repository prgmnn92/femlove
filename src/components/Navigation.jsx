import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import Container from "./Container";
import cn from "classnames";
import { Menu, Transition } from "@headlessui/react";

const InPageLinks = [
  { href: "/", name: "Start" },
  { href: "/blog", name: "Blog" },
  { href: "/empfehlungen", name: "Empfehlungen" },
  { href: "/ueber-mich", name: "Über Mich" },
  { href: "/kontakt", name: "Kontakt" },
  { href: "/angebot", name: "Angebot" },
];

const NavLink = ({ href, children }) => {
  return (
    <Link
      className="block py-2 pl-2 pr-3 font-medium text-center text-gray-700 transition-all rounded hover:text-f-green md:hover:bg-transparent md:border-0 md:hover:text-f-green md:p-0"
      href={href}
    >
      {children}
    </Link>
  );
};

const Navigation = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded sticky top-0 left-0 right-0 z-50">
      <Container className="relative flex flex-wrap items-center justify-between">
        <Link href={"/"}>
          <Image
            src={"/logos/brand.png"}
            alt="Brand Logo"
            width={90}
            height={90}
          />
        </Link>
        <MobileMenu />
        <div
          className={cn({
            "w-full md:block md:w-auto  md:static absolute left-0 top-[50px] shadow-sm md:shadow-none  transition-all opacity-1 hidden": true,
          })}
          id="navbar-default"
        >
          <ul className="flex flex-col items-center p-4 mt-4 border border-gray-100 rounded-lg bg-f-offwhite md:flex-row md:space-x-8 md:mt-0 md:text-sm md:border-0 md:bg-white ">
            {InPageLinks.map((linkItem) => (
              <li key={linkItem.name}>
                <NavLink href={linkItem.href}>{linkItem.name}</NavLink>
              </li>
            ))}
            <li className="pt-4 md:pt-0">
              <Link
                href={"https://mailchi.mp/8007355fc29b/newsletter-abonnieren"}
                className={
                  "bg-f-main text-md text-white md:ml-2 rounded-full font-semibold px-7 py-2"
                }
                target="_blank"
                rel="noreferrer"
                // ref={"noreferrer"}
              >
                Mehr Erfahren
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

function MobileMenu() {
  return (
    <>
      <Menu as="div" className="relative inline-block text-left md:hidden">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium rounded-md text-f-green bg-f-green bg-opacity-5 hover:bg-opacity-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
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
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
          className="w-[80vw]"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {InPageLinks.map((menuLink, id) => {
                return (
                  <Menu.Item key={id} className="px-2 py-2 text-center">
                    <NavLink href={menuLink.href}>{menuLink.name}</NavLink>
                  </Menu.Item>
                );
              })}
            </div>
            <div className="px-4 py-4">
              <Menu.Item className="flex justify-center px-2 py-2 text-center">
                <Link
                  href={"https://mailchi.mp/8007355fc29b/newsletter-abonnieren"}
                  className={
                    "bg-f-main text-white md:ml-2 rounded-full font-semibold px-7 py-2 mx-auto"
                  }
                  // onClick={() => openModal()}
                  target="_blank"
                  rel="noreferrer"
                  // ref={"noreferrer"}
                >
                  Mehr Erfahren
                </Link>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}

export default Navigation;
