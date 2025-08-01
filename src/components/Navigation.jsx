import React, { useEffect, useState } from "react";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";

import InstagramIcon from "./icons/InstagramIcon";
import NavIcon from "./icons/NavIcon";
import PinterestIcon from "./icons/PinterestIcon";

export const navigation = [
  { href: "/", name: "Start" },
  { href: "/blog", name: "Blog" },
  // { href: "/ueber-mich", name: "Über Mich" },
  // { href: "/angebot", name: "Angebot" },
  // { href: "/kontakt", name: "Kontakt" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navigation() {
  const [navPosition, setNavPosition] = useState(0);

  useEffect(() => {
    function navTransition() {
      let scrollPosition;
      if (window.scrollY < 70) {
        scrollPosition = 0;
      }
      if (window.scrollY <= 140 && window.scrollY >= 70) {
        scrollPosition = 70 - Math.round(window.scrollY);
      }
      if (window.scrollY > 140) {
        scrollPosition = -70;
      }
      setNavPosition(scrollPosition);
    }

    document.addEventListener("scroll", navTransition);

    return () => {
      document.removeEventListener("scroll", navTransition);
    };
  }, [navPosition]);

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-sm max-w-[100vw]"
    >
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl lg:px-8">
            <div className="relative flex items-center justify-center h-16 pt-4">
              <div className="absolute inset-y-auto left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-black focus:outline-none focus:ring-[1px] focus:ring-inset focus:ring-black/10">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="absolute inset-auto z-20 flex items-center flex-shrink-0 ml-0 right-4 lg:mt-0 lg:left-0 lg:right-auto">
                <InstagramIcon />
                {/* <PinterestIcon /> */}
              </div>
              <div
                style={{ top: `${navPosition}px` }}
                className={`hidden relative lg:ml-6 lg:flex lg:flex-col lg:items-center lg:inset-auto`}
              >
                <div className="pt-2">
                  <Link href={"/"}>
                    <NavIcon />
                  </Link>
                </div>
                <div className="absolute bottom-[-65px] flex items-center gap-4 min-w-[100vw] justify-center">
                  {navigation.map((item) => (
                    <NavItem
                      key={item.name}
                      href={item.href}
                      title={item.name}
                      target={item.target}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute inset-y-auto right-0 items-center hidden pr-2 lg:flex lg:ml-6 lg:pr-0">
                <Link
                  className="elative  duration-300 rounded-[14px] transition-colors focus:outline-none focus:ring-2 focus:ring-white/10 focus:ring-offset-2  border-[1px] border-solid border-f-brown cursor-pointer text-f-brown  bg-transparent font-medium hover:text-white hover:bg-f-brown px-5 py-2 text-sm"
                  href={"https://femlove-by-franzi.ck.page/37146a21b8"}
                  target="_blank"
                  aria-label="Zyklus Journalfragen download"
                >
                  Zyklus Journalfragen
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? "font-bold" : "text-black ",
                    "rounded-[14px] px-3 py-2 hover:font-semibold text-sm font-medium transition-all cursor-pointer block text-center",
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className="block pt-4 text-center">
                <Link
                  className="relative  duration-300 rounded-[14px] transition-colors focus:outline-none focus:ring-2 focus:ring-white/10 focus:ring-offset-2  border-[1px] border-solid border-f-brown cursor-pointer px-5 py-2 text-sm text-f-brown  bg-transparent font-medium hover:text-white hover:bg-f-brown"
                  href={
                    "https://calendly.com/femlove/kostenloses-erstgespraech"
                  }
                  target="_blank"
                  aria-label="Buche ein kostenloses erstgespräch"
                >
                  Kostenloses Kennenlerngespräch
                </Link>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

const NavItem = ({ title, href, target = "_self" }) => {
  const router = useRouter();
  const current = href === router.pathname;
  return (
    <Link href={href} target={target}>
      <div
        className={classNames(
          current ? "font-semibold" : "font-medium",
          "rounded-[14px] px-3 py-2 hover:font-semibold text-sm cursor-pointer inline",
        )}
        aria-current={current ? "page" : undefined}
      >
        {title}
      </div>
    </Link>
  );
};

export default Navigation;
