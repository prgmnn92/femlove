import React, { Fragment, useEffect, useState } from "react";

import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Container from "./Container";

const InPageLinks = [
  { href: "/", name: "Start" },
  { href: "/blog", name: "Blog" },
  { href: "/ueber-mich", name: "Über Mich" },
  { href: "/empfehlungen", name: "Empfehlungen" },
  { href: "/angebot", name: "Angebot" },
  {
    href: "https://femlove-by-franzi.ck.page/26b521630c",
    name: "Für 0 Euro",
    target: "_blank",
  },
  { href: "/kontakt", name: "Kontakt" },
];

const NavLink = ({ href, children, target }) => {
  const router = useRouter();
  const [isActive, setActive] = useState(false);
  useEffect(() => {
    if (router.pathname === href) {
      setActive(true);
    }
  }, []);

  return (
    <Link
      className={`relative block py-2 pl-2 pr-3 font-medium text-center text-gray-700 duration-500 rounded hover:text-f-red lg:hover:bg-transparent lg:border-0 lg:p-0 hover-underline ${
        isActive ? "nav-link--is-active" : ""
      }`}
      href={href}
      target={target}
    >
      {children}
    </Link>
  );
};

const Navigation = () => {
  const [navIsTop, setNavIsTop] = useState(true);

  useEffect(() => {
    function navTransition() {
      if (window.pageYOffset >= 50) {
        setNavIsTop(false);
      } else {
        setNavIsTop(true);
      }
    }

    document.addEventListener("scroll", navTransition);

    return () => {
      document.removeEventListener("scroll", navTransition);
    };
  }, []);

  return (
    <nav
      className={
        "bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded sticky top-0 left-0 right-0 z-[999999] transition-all " +
        (navIsTop ? "py-4" : "py-2.5 shadow-md")
      }
    >
      <Container className="relative flex flex-wrap items-center justify-between">
        <Link href={"/"}>
          <Image
            src={"/logos/brand.png"}
            priority={true}
            alt="Brand Logo"
            width={90}
            height={90}
          />
        </Link>
        <MobileMenu />
        <div
          className={
            "w-full lg:block lg:w-auto  lg:static absolute left-0 top-[50px] shadow-sm lg:shadow-none  transition-all opacity-1 hidden"
          }
          id="navbar-default"
        >
          <ul className="flex p-4 mt-4 border border-gray-100 rounded-lg lg:flex-wrap bg-f-offwhite lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:border-0 lg:bg-white ">
            {InPageLinks.map((linkItem) => (
              <li key={linkItem.name}>
                <NavLink href={linkItem.href} target={linkItem.target}>
                  {linkItem.name}
                </NavLink>
              </li>
            ))}
            <li className="pt-4 lg:pt-0">
              <Link
                href={"https://femlove-by-franzi.ck.page/newsletter"}
                className={
                  "flex-none rounded-md bg-f-red px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-f-red-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-f-red transition-all"
                }
                target="_blank"
                rel="noreferrer"
                // ref={"noreferrer"}
              >
                Newsletter
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
      <Menu as="div" className="relative inline-block text-left lg:hidden">
        <div>
          <Menu.Button
            aria-label="mobile menu"
            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium rounded-md text-f-green bg-f-green bg-opacity-5 hover:bg-opacity-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
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
                  <Menu.Item key={id} className="px-2 my-2 text-center">
                    <NavLink href={menuLink.href}>{menuLink.name}</NavLink>
                  </Menu.Item>
                );
              })}
            </div>
            <div className="px-4 py-4">
              <Menu.Item className="flex justify-center px-2 py-2 text-center">
                <Link
                  href={"https://femlove-by-franzi.ck.page/newsletter"}
                  className={
                    "bg-f-main text-white lg:ml-2 rounded-full font-semibold px-7 py-2 mx-auto hover:brightness-105 transition-all"
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  Newsletter
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
