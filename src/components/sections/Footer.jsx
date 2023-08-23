import React from "react";

import Link from "next/link";

import { navigation } from "../Navigation";

const Footer = () => {
  return (
    <section className="relative pb-16 lg:pt-32 pt-24 mt-[-64px] bg-black text-white/80 overflow-hidden z-10">
      <div className="container max-w-xl mx-auto">
        <div className="relative z-10 flex flex-col items-center justify-between gap-4 lg:flex-row">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs cursor-pointer lg:text-sm"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center pt-12">
          <div className="flex gap-8 pb-4">
            <Link href={"/impressum"} className="text-xs text-white/40">
              Impressum
            </Link>
            <Link href={"/datenschutz"} className="text-xs text-white/40">
              Datenschutz
            </Link>
          </div>
          <p className="text-xs text-white/40">© 2023 femlove</p>
        </div>
      </div>
      <div className="absolute bottom-[-800px] flex items-center justify-center w-full ">
        <div className="w-[1680px] h-[1680px] absolute border-2 rounded-full border-[#ffffff]"></div>
      </div>
    </section>
  );
};

export default Footer;
