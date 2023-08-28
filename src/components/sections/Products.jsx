import React from "react";

import Heading from "../Heading";
import ProductCard from "../ProductCard";

const Products = () => {
  return (
    <section className="relative pt-16 pb-16 lg:pb-32">
      <div className="container relative z-10 px-4 mx-auto">
        <Heading title="Worauf wartest du noch?" subtitle="Mein Angebot" />
        <div className="flex flex-col gap-4 lg:flex-row">
          <ProductCard
            title={"Weekly Newsletter"}
            category={"Für 0 Euro"}
            href={"https://femlove-by-franzi.ck.page/newsletter1"}
            imageSrc={"/images/newsletter.jpg"}
            text={
              "Jeden Dienstag bekommst du knackige Tipps und Impulse für ein zyklusbewusstes & ganzheitliches Leben. Auf den Punkt gebracht und ohne viel Chichi."
            }
            cta="Hier anmelden"
          />
          <ProductCard
            title={"1:1 Coaching"}
            category={"deep dive"}
            href={"/angebot"}
            imageSrc={"/images/coaching.jpg"}
            text={
              "Bist du ready für den Deep Dive? Ich biete verschiedene Möglichkeiten eines 1:1 Coachings an: Einen “Zyklus-Power-Call”, meinen “Super-Call”, &&&. Für jeden Zeitrahmen und Geldbeutel ist etwas dabei. Erfahre hier direkt mehr."
            }
            cta="Mehr erfahren"
          />
        </div>
      </div>
      <div className="absolute bottom-[-30px] flex items-center justify-center w-full -z-10">
        <div className="w-[270px] h-[270px] absolute border-2 rounded-full border-[#EBE9E5]"></div>
      </div>
    </section>
  );
};

export default Products;
