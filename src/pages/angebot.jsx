/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from "react";

import { configQuery } from "@lib/groq";
import { sanityClient } from "@lib/sanity";
import { motion } from "framer-motion";
import Image from "next/image";

import Button from "@/components/Button";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import HeadingH1 from "@/components/headings/HeadingH1";
import Layout from "@/components/Layout";
import { ModalContext } from "@/ModalContext";

const Angebot = ({ siteConfig }) => {
  return (
    <Layout {...siteConfig}>
      <section>
        <Container className="px-4 py-8 lg:py-12">
          <HeadingH1>Mein Angebot</HeadingH1>
        </Container>
      </section>
      <WorkTogether />
      <StepsView />
      <CTA />
    </Layout>
  );
};

const WorkTogether = () => {
  const openModal = useContext(ModalContext);
  return (
    <section className="text-gray-600 body-font">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.15 }}
        delay={0.1}
        className="container flex flex-wrap items-center px-5 py-8 mx-auto md:py-24"
      >
        <div className="pr-0 lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0">
          <h2 className="pb-6 text-3xl font-medium text-gray-900 title-font">
            🌸 Willkommen bei meinem 1:1 Coaching für ganzheitliche Gesundheit
            für Frauen! 🌸
          </h2>
          <p className="pb-2">
            Ich bin deine Holistic Health & Wellness Coachin und ich helfe die,
            deine Gesundheit auf ganzheitliche Weise zu verbessern. Ich
            berücksichtige dabei speziell den weiblichen Zyklus und zeige dir,
            wie du deine Ernährung, Bewegung, deine Selbstfürsorge wie auch dein
            Stressmanagement anpassen kannst, um das Beste aus dir und deinem
            Körper herauszuholen.
          </p>
          <p className="pb-6">
            Mit meinem Coaching wirst du nicht nur deine Gesundheit verbessern,
            sondern auch ein tieferes Verständnis & Bewusstsein für deinen
            Körper und seine Bedürfnisse entwickeln.
          </p>
          <p className="pb-2 font-semibold">
            Hier sind einige Vorteile, die du durch mein Coaching erreichen
            kannst:
          </p>
          <p className="pb-2">
            💪 Mehr Energie und Vitalität durch eine ganzheitliche
            Herangehensweise an deine Gesundheit
          </p>
          <p className="pb-2">🍎 Bessere Ernährungsgewohnheiten</p>
          <p className="pb-2">
            😌 Reduzierter Stress durch Entspannungsübungen und
            Achtsamkeitstraining
          </p>
          <p className="pb-2">
            💜 Verbesserte Beziehungen durch ein besseres Verständnis für deine
            eigenen Bedürfnisse und Grenzen
          </p>
          <p className="pb-2">
            💪 Mehr Selbstvertrauen und Selbstwertgefühl durch die Verfolgung
            deiner eigenen Ziele
          </p>
          <p className="pb-6">✨ Besseres Bewusstsein für deinen Zyklus</p>
          <p className="pb-2">
            Wenn du bereit bist, dein Leben auf ganzheitliche Weise zu
            verbessern und deinen weiblichen Zyklus zu nutzen, um deine
            Gesundheit zu optimieren, dann lass uns zusammenarbeiten!
          </p>
          <p className="pb-2">
            Ich biete ein kostenfreies Erstgespräch an, damit wir uns erst
            einmal beschnuppern können. Wir schauen gemeinsam, ob und wie ich
            dich auf deinem Weg in ein gesünderes & ausgeglicheneres Leben
            unterstützen kann.
          </p>
          <p className="pb-2">
            Melde dich jetzt an und lass uns gemeinsam deine Gesundheit und dein
            Wohlbefinden auf ein neues Level heben! 🔥
          </p>

          <div className="pt-6">
            <Button className={"bg-f-main text-white"} onClick={openModal}>
              Kostenloses Kennenlerngespräch
            </Button>
          </div>
        </div>
        <div className="flex flex-col w-full mt-10 rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
          <Image
            alt="feature"
            className="object-cover object-center w-full h-full"
            src="/images/angebot.webp"
            width={460}
            height={500}
          />
        </div>
      </motion.div>
    </section>
  );
};

const StepsView = () => (
  <section className="text-gray-600 body-font">
    <Container className="flex flex-wrap px-5 py-8 md:py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.15 }}
        delay={0.1}
        className="relative flex pt-10 pb-20 mx-auto sm:items-center md:w-2/3"
      >
        <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
          <div className="w-1 h-full pointer-events-none bg-f-green bg-opacity-20"></div>
        </div>
        <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white rounded-full bg-f-green sm:mt-0 title-font">
          1
        </div>
        <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 rounded-full bg-f-green bg-opacity-10 text-f-green">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-12 h-12"
              viewBox="0 0 24 24"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div className="flex-grow mt-6 sm:pl-6 sm:mt-0">
            <h2 className="mb-1 text-xl font-medium text-gray-900 title-font">
              Kostenloses Kennenlerngespräch (online)
            </h2>
            <p className="leading-relaxed">
              In diesem Gespräch können wir uns ganz unverbindlich kennenlernen
              und schauen, ob die Chemie stimmt. Du berichtest mir vor allem von
              deinen Problemen und Wünschen. Wir finden auf ganz unkomplizierte
              Art heraus, ob und wie ich dir auf deinem Weg zu einem gesunden &
              zyklusgerechten Leben helfen kann. ✨
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.15 }}
        delay={0.1}
        className="relative flex pb-20 mx-auto sm:items-center md:w-2/3"
      >
        <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
          <div className="w-1 h-full pointer-events-none bg-f-green bg-opacity-20"></div>
        </div>
        <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white rounded-full bg-f-green sm:mt-0 title-font">
          2
        </div>
        <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 rounded-full bg-f-green bg-opacity-10 text-f-green">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-12 h-12"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="flex-grow mt-6 sm:pl-6 sm:mt-0">
            <h2 className="mb-1 text-xl font-medium text-gray-900 title-font">
              It's a Match? Weitere Zusammenarbeit
            </h2>
            <p className="leading-relaxed">
              Wenn von beiden Seiten alles passt, werden wir in weiteren
              1:1-Coaching-Sessions (online) intensiver zusammenarbeiten. Ich
              arbeite einen auf dich zugeschnittenen Fahrplan zu einem gesunden
              und zyklusgerichteten Leben aus, der zudem langfristig deine
              Beschwerden lindern soll. ​ Wie viele Sessions du in Anspruch
              nehmen möchtest, hast du in der Hand.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.15 }}
        delay={0.1}
        className="relative flex pb-20 mx-auto sm:items-center md:w-2/3"
      >
        <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
          <div className="w-1 h-full pointer-events-none bg-f-green bg-opacity-20"></div>
        </div>
        <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white rounded-full bg-f-green sm:mt-0 title-font">
          3
        </div>
        <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 rounded-full bg-f-green bg-opacity-10 text-f-green">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-12 h-12"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex-grow mt-6 sm:pl-6 sm:mt-0">
            <h2 className="mb-1 text-xl font-medium text-gray-900 title-font">
              Langfristiger Support
            </h2>
            <p className="leading-relaxed">
              Keine soll den Weg alleine gehen. Meine Femlovelies sind eine
              Community. Du erhältst weiterhin meinen monatlichen Newsletter und
              regelmäßig frischen Content, der dir dabei hilft dein Ziel nicht
              aus den Augen zu verlieren. Mein Ziel ist es, die Community zum
              Leben zu erwecken und für einen Austausch untereinander zu sorgen.
              👯‍♀️ Zudem stehe ich dir zwischen zwei Coaching-Sessions via
              WhatsApp zur Verfügung. 💫
            </p>
          </div>
        </div>
      </motion.div>
    </Container>
  </section>
);

//TODO: Steps in components unwamdeln
//TODO: CTA am ende der Steps?

export async function getStaticProps({ params, preview = false }) {
  const config = await sanityClient.fetch(configQuery);
  return {
    props: {
      siteConfig: { ...config },
      preview,
    },
    revalidate: 100,
  };
}

export default Angebot;
