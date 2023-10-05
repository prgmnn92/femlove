/* eslint-disable react/no-unescaped-entities */
import React from "react";

import { configQuery } from "@lib/groq";
import { sanityClient } from "@lib/sanity";

import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import Banner from "@/components/sections/Banner";

const Angebot = ({ siteConfig }) => {
  const angebotPowerCallContent = (
    <div>
      <ul>
        <li className="pb-2">
          ✦ Verstehe, wie du deine Zyklusphasen für dich nutzen kannst
        </li>
        <li className="pb-2">
          ✦ Vertiefe die Verbindung zu dir und deinen Bedürfnissen
        </li>
        <li className="pb-2">
          ✦ Steigere deine Energie, Kreativität und Produktivität
        </li>
      </ul>
      <p className="pt-2">☞ ab 69 Euro</p>
      <p className="pt-2 ">
        Vereinbare gleich einen Kennenlerntermin und wir schauen, ob es zwischen
        uns matcht und worauf wir uns im Zyklus-Power-Call fokussieren können.{" "}
      </p>
    </div>
  );

  const angebotSuperCallContent = (
    <div>
      <ul>
        <li className="pb-2">
          ✦ befreie dich endlich von äußeren Erwartungen und Vergleichen
        </li>
        <li className="pb-2">
          ✦ lass die Vergangenheit los und werde zur besten Version deiner
          Selbst
        </li>
        <li className="pb-2">✦ erkenne deinen Wert und geh für dich los</li>
      </ul>
      <p className="pt-2">☞ ab 89 Euro</p>
      <p className="pt-2 ">
        Vereinbare gleich einen Kennenlerntermin und wir schauen, ob es zwischen
        uns matcht und worauf wir uns in dem Super-Call fokussieren. Übrigens:
        Bei diesem Coaching-Angebot hast du die Option einer langfristigen
        Zusammenarbeit mit mir. Gerne stelle ich dir für eine langfristige
        Begleitung ein individuelles Angebot zusammen.
      </p>
    </div>
  );

  const monthlyCallContent = (
    <div>
      <p className="pt-2">☞ 20 Euro für deinen ersten Monats-Check-In</p>
      <p className="pt-2">
        🚨 Special Offer: Schnapp dir eine oder mehrere Freundinnen und fragt
        einen exklusiven Gruppencall zum Sonderpreis an (hier anfragen)!
        Gemeinsam könnt ihr euch inspirieren und gegenseitig motivieren.
      </p>
      <p className="pt-2">
        Buche hier gleich einen Termin für deinen ersten Monats-Check-In mit
        mir.
      </p>
    </div>
  );

  const visionCallContent = (
    <div>
      <p>
        Der Termin steht noch nicht fest. Du kannst dich per Mail von mir
        informieren lassen, sobald der Termin feststeht. Melde dich dazu hier
        an. ⬇️
      </p>
    </div>
  );

  return (
    <Layout {...siteConfig}>
      <Banner
        title="So kannst du mit mir zusammenarbeiten"
        subtitle="Angebot"
        text={
          "Bist du bereit für dich loszugehen? Ich unterstütze dich auf deinem individuellen Weg und biete dir verschiedene 1:1 Calls an, in denen wir an deinen aktuellen Themen und Herausforderungen arbeiten."
        }
      />
      <section className="pb-64 bg-[#f4f4f4] rounded-[56px] lg:pt-24 pt-12 mt-[-64px] relative z-20">
        <div className="container px-6 mx-auto lg:px-8">
          <div className="flex flex-col grid-cols-2 gap-x-4 gap-y-8 lg:grid ">
            <ProductCard
              title={"1:1 Zyklus-Power Call"}
              category={"Zyklusbewusstsein"}
              href={"https://calendly.com/femlove/kostenloses-erstgespraech"}
              imageSrc={"/images/zykluspower.jpg"}
              text={
                "Wir arbeiten in einer oder in zwei Stunden (du hast die Wahl) daran, wie du deinen individuellen Alltag zyklusbewusster gestalten und deinen Zyklus durch einen ganzheitlichen Lifestyle unterstützen kannst. Entdecke deine Zyklus-Power. ✨"
              }
              bodyContent={angebotPowerCallContent}
              cta="Kennenlerntermin vereinbaren"
            />
            <ProductCard
              title={"1:1 Super Call"}
              category={"Selbstverwirklichung"}
              href={"https://calendly.com/femlove/kostenloses-erstgespraech"}
              imageSrc={"/images/supercall.jpg"}
              text={
                "Du weißt, du möchtest an deiner aktuellen Situation etwas ändern und dich & Träume verwirklichen? Mehr zu dir finden und dich von dem lösen, was dich zurückhält? Weißt aber nicht, wie du das Ganze am besten angehst? In meinem 1:1 Super-Call arbeiten wir ein oder zwei Stunden an ein bis zwei Fokusthemen deiner Wahl. Am Ende des Calls bekommst du individuelle Action Steps mit an die Hand. ✨ "
              }
              bodyContent={angebotSuperCallContent}
              cta="Kennenlerntermin vereinbaren"
            />
            <ProductCard
              title={"Monats-Check-In"}
              category={"new month, fresh goals"}
              href={"https://calendly.com/femlove/monats-check-in"}
              imageSrc={"/images/monthlycheckin.jpg"}
              text={
                "Und schwups, bist du schon längst im neuen Monat und hast mal wieder deine Monatsplanung vergessen. 🤦‍♀️ Passiert dir mit meinem Monats-Check-In nicht mehr, denn ich gebe dir die Verbindlichkeit und den Support, den du brauchst. Eine Stunde lang geht es um Verbindung, Reflexion, Loslassen, Planung und Goal-Setting. "
              }
              bodyContent={monthlyCallContent}
              cta="Termin buchen"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

//TODO: Steps in components unwamdeln
//TODO: CTA am ende der Steps?

export async function getStaticProps({ params, preview = false }) {
  const configs = await sanityClient.fetch(configQuery);
  const siteConfig =
    configs.find((config) => config.url == "https://femlove.blog/angebot") ||
    configs[0];
  return {
    props: {
      siteConfig: { ...siteConfig },
      preview,
    },
    revalidate: 100,
  };
}

export default Angebot;
