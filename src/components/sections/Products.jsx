import React from "react";

import Heading from "../Heading";
import ProductCard from "../ProductCard";

const Products = () => {
  return (
    <section className="relative pt-16 pb-16 lg:pb-32">
      <div className="container relative z-10 px-4 mx-auto">
        <Heading title="Ist das interessant für dich?" subtitle="Mehr" />
        <div className="flex flex-col gap-4 lg:flex-row">
          <ProductCard
            title={"Trackle Sensor"}
            category={"Rabattcode"}
            href={"/post/erfahrungsbericht-trackle"}
            imageSrc={"/images/trackle.webp"}
            text={
              "Mit dem Rabattcode „FEMLOVE10“ erhältst du 10% Rabatt auf den Kauf eines trackles oder den Abschluss eines trackle Abos (Werbung)"
            }
            cta="Erfahrungsbericht"
          />
          <ProductCard
            title={"Frauencoaching"}
            category={"Franziska Pargmann"}
            href={"https://www.franziskapargmann.de"}
            imageSrc={"/images/coaching.webp"}
            text={
              "Du interessierst dich für mein Coaching und Mentoring Angebot? Dann schau super gerne bei franziskapargmann.de vorbei"
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
