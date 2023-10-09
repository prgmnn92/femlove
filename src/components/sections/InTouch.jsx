import Link from "next/link";

import { sourceSerif } from "@/fonts";
const InTouch = () => {
  return (
    <section className="lg:py-16 py-12 bg-[#F4F4F4] rounded-[56px] relative z-20">
      <div className="container flex flex-col items-center max-w-xs mx-auto text-center lg:max-w-lg">
        <h2
          style={sourceSerif.style}
          className="text-2xl font-light lg:text-4xl"
        >
          Noch Fragen?
        </h2>
        <p className="pt-4 text-sm lg:text-base">
          Schreibe mir einfach eine Nachricht mit deinen Fragen, Anfragen,
          deinem Feedback. Was auch immer du loswerden möchtest: Hier ist Platz
          dafür:
        </p>
        <div className="pt-4">
          <Link
            className={`relative z-20 duration-300 rounded-[14px] transition-colors focus:outline-none focus:ring-2 focus:ring-white/10 focus:ring-offset-2  border-[1px] border-solid border-f-brown cursor-pointer px-5 py-2 text-sm text-white bg-f-brown hover:text-f-brown font-medium  hover:bg-white 
      `}
            href={"/kontakt"}
            aria-label="kontakt seite"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InTouch;
