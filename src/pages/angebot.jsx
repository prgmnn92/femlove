/* eslint-disable react/no-unescaped-entities */
import Button from "@/components/Button";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import HeadingH1 from "@/components/headings/HeadingH1";
import Layout from "@/components/Layout";
import Image from "next/image";
import React, { useContext } from "react";
import { ModalContext } from "@/ModalContext";
import { motion } from "framer-motion";
import { sanityClient } from "@lib/sanity";
import { configQuery } from "@lib/groq";

const Angebot = ({ siteConfig }) => {
  return (
    <Layout {...siteConfig}>
      <section>
        <Container className="px-4 py-8 lg:py-12">
          <HeadingH1>Mein Angebot</HeadingH1>
        </Container>
      </section>
      <section>
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.15 }}
            delay={0.1}
            className="flex flex-wrap w-full p-6 mb-8 bg-white shadow lg:p-8"
          >
            <div className="w-full pb-6 lg:w-1/3">
              <h2 className="text-2xl lg:text-4xl">
                Du musst den Weg nicht alleine gehen.
              </h2>
            </div>
            <div className="w-full lg:w-2/3 lg:pl-4">
              <p>
                Plötzlich merkst du, dass der weibliche Zyklus einen großen
                Einfluss auf deine körperliche und mentale Verfassung hat. ✨ Du
                möchtest ihn bestmöglich in deinem Leben berücksichtigen und
                nicht mehr "einfach die Tage haben". Aber da gibt es so viel zu
                berücksichtigen; WOW. 🤯
              </p>
              <p>
                Das kann überfordernd sein - I FEEL YOU. 💖 Deshalb stehe ich
                dir zur Seite, denn du musst diesen Weg in ein gesundes und
                zyklusgerechtes Leben nicht alleine gehen.
              </p>
            </div>
          </motion.div>
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
        className="container flex flex-wrap items-center px-5 py-24 mx-auto"
      >
        <div className="pr-0 lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0">
          <h2 className="text-3xl font-medium text-gray-900 title-font">
            So kannst du mit mir zusammenarbeiten
          </h2>
          <p className="mt-4 text-lg leading-relaxed">Wenn du:</p>
          <ul className="max-w-2xl text-lg list-disc">
            <li className="pb-1 ml-6 lg:ml-3">
              gerade erst deinen Zyklus kennenlernst und so viel mehr darüber
              lernen möchtest,
            </li>
            <li className="pb-1 ml-6 lg:ml-3">
              deinen Zyklus zwar schon kennst, es dir jedoch schwer fällt
              langfristige Veränderungen in Bezug auf Bewegung, Ernährung und
              Selbstfürsorge - und dann auch noch zyklusgerecht - in deinen
              Alltag zu integrieren,
            </li>
            <li className="pb-1 ml-6 lg:ml-3">
              einfach Bock hast. dein Leben zyklusgerechter zu gestalten, um das
              Beste aus dir und deiner Superpower herauszuholen,
            </li>
            <li className="pb-1 ml-6 lg:ml-3">
              die Pille absetzen möchtest und dich fragst wie du deinen Körper
              in der Zeit nach dem Absetzen ideal unterstützen kannst,
            </li>
            <li className="pb-1 ml-6 lg:ml-3">
              dir noch nicht sicher bist, wie die Zusammenarbeit konkret mit mir
              aussieht und mich einfach erstmal besser kennenlernen möchtest.
            </li>
          </ul>
          <div className="pt-6">
            <Button className={"bg-f-main text-white"} onClick={openModal}>
              Kostenloses Kennenlerngespräch
            </Button>
          </div>
        </div>
        <div className="flex flex-col w-full mt-10rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
          <Image
            alt="feature"
            className="object-cover object-center w-full h-full"
            src="/images/mark-adriane.webp"
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
    <Container className="flex flex-wrap px-5 py-24">
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
      siteconfig: { ...config },
      preview,
    },
    revalidate: 100,
  };
}

export default Angebot;
