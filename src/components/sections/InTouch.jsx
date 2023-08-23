import Link from "next/link";

import Button from "../Button";
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
        <p className="pt-4 text-sm lg:text-lg">
          Schreibe mir einfach eine Nachricht mit deinen Fragen, Anfragen,
          deinem Feedback. Was auch immer du loswerden möchtest: Hier ist Platz
          dafür:
        </p>
        <div className="pt-4">
          <Link href="/kontakt">
            <Button title="Kontakt" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InTouch;
