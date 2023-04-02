import React, { useEffect, useState } from "react";

import { XMarkIcon } from "@heroicons/react/20/solid";
import { setCookie, hasCookie } from "cookies-next";

import Button from "./Button";

function Consent({ setConsent, consent }) {
  useEffect(() => {
    setConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setConsent(true);
    setCookie("localConsent", "true", { maxAge: 60 * 60 * 24 * 365 });
    // window.location.reload();
  };
  const closeP = () => {
    setConsent(true);
  };
  // const denyCookie = () => {
  //   setConsent(true);
  //   setCookie("localConsent", "false", { maxAge: 60 * 60 * 24 * 365 });
  // };
  if (consent === true) {
    return null;
  }
  return (
    <div
      className={`fixed md:flex md:items-center md:justify-between bottom-0 w-full left-0  bg-slate-100 p-4 md:py-4 md:px-8  ${
        consent ? "hidden" : ""
      }`}
    >
      Diese Website verwendet Cookies, um das Nutzererlebnis zu verbessern.
      <div className="">
        <button
          onClick={(e) => {
            closeP();
          }}
          className="absolute top-2 right-2"
          aria-label="close cookie banner"
        >
          <XMarkIcon color="black" className="w-[22px] h-[22px]" />
        </button>
        <Button
          onClick={() => {
            acceptCookie();
          }}
          className="w-full mt-2 text-white md:mt-0 bg-f-green md:w-auto "
        >
          Akzeptieren
        </Button>
      </div>
    </div>
  );
}

export default Consent;
