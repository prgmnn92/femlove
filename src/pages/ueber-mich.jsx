/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import HeadingH1 from "@/components/headings/HeadingH1";
import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});
import { motion } from "framer-motion";
import { sanityClient } from "@lib/sanity";
import { configQuery } from "@lib/groq";

const ÜberMich = ({ siteConfig }) => {
  return (
    <Layout {...siteConfig}>
      <section>
        <Container className="px-4 py-8 lg:py-12">
          <HeadingH1>Hi! Ich bin Franzi.</HeadingH1>
        </Container>
      </section>
      <section>
        <Container className="flex flex-wrap pb-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.15 }}
            delay={0.1}
            className="w-full pb-8 mb-10 overflow-hidden lg:w-1/2 lg:mb-0 lg:text-lg lg:pr-12"
          >
            <Image
              alt="feature"
              className="object-cover object-center w-full h-full"
              src="/images/femlove_me.webp"
              width={500}
              height={700}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.15 }}
            delay={0.1}
            className="flex flex-col flex-wrap md:mb-10 lg:w-1/2 lg:text-left"
          >
            <p className="pb-3 font-semibold">
              Holistic Health & Wellness Coach i.A. ​
            </p>
            <p>
              Ich bin 28 Jahre alt, liebe es zu reisen, in der Natur zu sein,
              habe ein großes Herz für Hunde, mache total gerne Sport und mag es
              einfach stetig an mir zu arbeiten. Ich habe meine Ups & Downs (wir
              alle haben sie), aus denen ich immer Neues über mich lerne und bin
              dabei mich von negativen Glaubenssätzen und gesellschaftlichen
              Erwartungen lösen.
            </p>
            <p className="pb-3 font-semibold pt-9">
              Warum habe ich Femlove ins Leben gerufen?
            </p>
            <p className="pb-6">
              Vielleicht geht es dir gerade wie mir vor knapp 3 Jahren. Pille
              abgesetzt, mit Erschrecken festgestellt, dass ich bei NULL stehe -
              zumindest was meinen Zyklus angeht.
            </p>
            <p className="pb-6">
              Denn: Nach 10 Jahren Pilleneinnahme hatte ich 0 Ahnung und 0
              Bewusstsein für meinen Zyklus, war maximal überfordert und wusste
              gar nicht wo ich anfangen soll. Dazu kamen Schmerzen, die ich
              durch die Pille natürlich nicht kannte; dachte es wäre normal →
              Spoiler: Ist es nicht.
            </p>
            <p className="pb-6">
              Ich weiß, dass es ganz vielen Frauen so geht, wie mir damals.
              Egal, ob vorherige Pilleneinnahme oder nicht.
            </p>
            <p className="pb-6">
              Es <b>fehlt</b> das Bewusstsein für den weiblichen Zyklus, die
              Verbindung zum eigenen inneren Rhythmus, das Wissen welches
              Potenzial dahinter steckt und wie frau die Zyklusphasen nutzen &
              unterstützen kann.
            </p>
            <p>
              Ja, auch du verdienst es, genau dieses Bewusstsein zu erfahren. 🙌
              On top lernst du, dich selbst zu akzeptieren, achtsam mit deinem
              Körper umzugehen und ihm zu geben was er braucht. ✨
            </p>
          </motion.div>
        </Container>
        <Container className="flex flex-wrap">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.15 }}
            delay={0.1}
            className="flex flex-col flex-wrap mb-10 lg:w-1/2 lg:pr-12 lg:text-left"
          >
            <p className="pb-6">
              Damit du auf deinem Weg nicht alleine bist, stehe ich dir mit dem
              Wissen, meinen Erfahrungen, Tipps & Ratschlägen zur Seite. 🙋‍♀️
            </p>
            <p className="pb-6">
              Außerdem lerne ich immer etwas Neues dazu und möchte meinen Blog
              nutzen, um Gedanken und neue Erkenntnisse mit dir zu teilen - und
              gemeinsam mit dir zu wachsen.
            </p>
            <p className="pb-6">
              Ich freue mich auf einen regen Austausch, Fragen, Wünsche und
              Anmerkungen.
            </p>
            <p className="pb-6">Viel Spaß beim Lesen!</p>
            <p className="pb-6">
              Love, <b>Franzi</b>
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.15 }}
            delay={0.1}
            className="w-full pb-8 mb-10 overflow-hidden lg:w-1/2 lg:mb-0 lg:text-lg"
          >
            <ReactPlayer
              url="https://www.youtube.com/watch?v=5ah_cRdRSTM&t=6s"
              width="100%"
              height="100%"
            />
          </motion.div>
        </Container>
      </section>
      <CTA />
    </Layout>
  );
};

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

export default ÜberMich;
