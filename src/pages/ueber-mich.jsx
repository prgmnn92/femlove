/* eslint-disable react/no-unescaped-entities */
import React from "react";

import { configQuery } from "@lib/groq";
import { sanityClient } from "@lib/sanity";
import Image from "next/image";
import Link from "next/link";

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";
import { sourceSerif } from "@/fonts";

const ÜberMich = ({ siteConfig }) => {
  return (
    <Layout {...siteConfig}>
      <Banner
        title="Hi, ich bin Franzi"
        text="Herzlich Willkommen in meiner Welt."
        subtitle="Über mich"
      />
      <section className="py-16 mt-[-64px] bg-[#F4F4F4] px-4 rounded-[56px] relative z-20">
        <div className="container max-w-4xl mx-auto ">
          <div className="flex items-start justify-between w-full max-w-5xl gap-8 mx-auto mb-10">
            <div>
              <h2
                className="pb-4 text-base lg:text-2xl"
                style={sourceSerif.style}
              >
                Mit mir bringst du deine ganzheitliche Gesundheit auf ein neues
                Level.
              </h2>
              <p className="pb-8 text-sm font-light lg:text-lg">
                Ich helfe dir im Einklang mit deinem Zyklus zu leben, Stress,
                PMS & Co. loszuwerden und so zu mehr Energie, Wohlbefinden &
                Selbstbewusstsein zu gelangen. 🌟
              </p>
              <h3
                className="pb-2 text-base lg:text-lg"
                style={sourceSerif.style}
              >
                Damit du mich als Mensch hinter Femlove besser kennenlernst,
                hier ein paar Fakten <span className="">über mich:</span>
              </h3>
              <div className="text-sm font-light columns-2 lg:text-lg">
                <p>🌸 29 Jahre alt</p>
                <p>🥰 Frisch verheiratet</p>
                <p>💪 Fitness & Bewegung = 💗</p>
                <p>🌳 Natur = Entschleunigung pur</p>
                <p>📖 Lesemaus</p>
                <p>🍕 Food-Lover</p>
                <p>🌎 Reisebegeistert</p>
                <p>😀 Lachen ist die beste Medizin</p>
                <p>🙌 Team: Positive & Growth Mindset</p>
              </div>
              <div>
                <h3
                  style={sourceSerif.style}
                  className="pt-6 pb-2 text-base lg:text-lg"
                >
                  Was mir besonders wichtig ist:
                </h3>
                <div className="text-sm font-light columns-2 lg:text-lg">
                  <p>❤️ Meine liebsten Menschen.</p>
                  <p>❤️ Ganzheitliche Gesundheit.</p>
                  <p>❤️ Freiheit.</p>
                  <p>❤️ Ehrlichkeit und Vertrauen.</p>
                </div>
              </div>
              <p className="pt-2 text-sm font-light lg:text-lg">
                Und mich nicht mehr von negativen Glaubenssätzen und
                gesellschaftlichen Erwartungen leiten lassen. Mein Leben zu
                leben. Erfüllt und ausgeglichen. 😌
              </p>
            </div>
            <Image
              alt="feature"
              className="object-contain object-center w-full rounded-[14px] aspect-auto border-8 border-white border-solid mt-20"
              src="/images/franzi.webp"
              width={250}
              height={400}
            />
          </div>

          <div className="flex flex-col flex-wrap md:mb-10 lg:w-1/2 lg:text-left"></div>
        </div>
        <div className="container max-w-3xl mx-auto ">
          <div className="flex flex-col flex-wrap mb-10 text-sm font-light lg:pr-12 lg:text-left lg:text-lg">
            <h3
              style={sourceSerif.style}
              className="pt-6 pb-2 text-base font-normal lg:text-lg"
            >
              Wie ich zu Femlove kam:
            </h3>

            <p className="pb-4">
              Es fing alles mit dem Zyklus an... Vor einigen Jahren die Pille
              abgesetzt, mit Erschrecken festgestellt, dass ich bei null stehe -
              zumindest was meinen Zyklus angeht. Denn:
            </p>
            <p className="pb-4">
              <strong>
                Nach 10 Jahren Pilleneinnahme hatte ich null Ahnung und null
                Bewusstsein für meinen Zyklus, war total überfordert und wusste
                gar nicht wo ich anfangen sollte.
              </strong>
            </p>
            <p className="pb-2">
              Seitdem ich die Pille abgesetzt habe, verwende ich die NFP-Methode
              mit
              <Link
                className="px-[5px] text-blue-500"
                href="/post/erfahrungsbericht-trackle"
              >
                trackle
              </Link>
              zur Verhütung. Von diesem Zeitpunkt an habe ich meine Zyklusphasen
              genau verfolgt, mir so viel Wissen wie möglich über den Zyklus
              angeeignet und mich selbst und meine Stimmungen beobachtet. Mit
              der Zeit wurde ich unglaublich dankbar für den wiederkehrenden
              Rhythmus, dem wir Frauen folgen. Ich habe die Analogien zu den
              Jahreszeiten verstanden und gefeiert. Gefeiert, dass ich einfach
              ich sein kann und mein Körper seinem natürlichen Rhythmus folgen
              darf. Ich habe mich dadurch noch stärker als Frau gefühlt. Dabei
              habe ich nicht nur mich selbst besser kennengelernt, sondern
              wollte meine Faszination auch mit anderen Frauen teilen und ihnen
              dabei helfen, ihren eigenen Zyklus und Körper besser zu verstehen.
              Denn genau das verdienen wir alle:
            </p>
            <p className="pb-2">
              <strong>
                ein Bewusstsein für unseren eigenen Zyklus und unseren Körper,
                sowie mehr Selbstbewusstsein & Selbstliebe.
              </strong>
            </p>
            <p className="pb-4">
              So entstand{" "}
              <Link className="text-blue-500" href="/">
                femlove.blog. ✨
              </Link>
            </p>
            <p className="pb-4">
              Zudem ist der Zyklus ein
              <strong className="px-[4px]">
                wichtiges Vitalzeichen unserer Gesundheit.
              </strong>
              Dein Lebensstil, deine allgemeine Gesundheit und viele andere
              Faktoren beeinflussen deinen Zyklus. So zeigen sich
              Ungleichgewichte oft durch verstärktes PMS und/oder
              Periodenschmerzen.
            </p>
            <p className="pb-4">
              Auf meinem Blog vereine ich heute all diese Aspekte. Mein Ziel ist
              es, dass du ganzheitlich gesund bist und im Einklang mit deinem
              Zyklus leben kannst. Mir liegen insbesondere die Bereiche
              Stressmanagement, Ernährung und Bewegung am Herzen.
            </p>
            <p className="pb-4 font-semibold">
              Kleiner Side-Fact, wofür der Name “Femlove” steht:
            </p>
            <p className="pb-3">
              👩 <strong className="px-[1px]">Fem:</strong> Steht für
              <strong className="px-[1px]"> Feminität,</strong> Weiblichkeit,
              Frausein - all das, was uns Frauen ausmacht.
            </p>
            <p className="pb-4">
              🤍 <strong className="px-[1px]">Love</strong>: Das Love aus
              Selflove. Wenn wir Frauen uns mit uns als Frau, unserer Gesundheit
              und unseren Bedürfnissen auseinandersetzen, können wir
              gleichzeitig den Weg zu mehr
              <strong className="px-[1px]"> Selbstliebe</strong> und -akzeptanz
              schaffen.
            </p>
            <h3
              style={sourceSerif.style}
              className="pt-6 pb-2 text-base font-normal lg:text-lg"
            >
              🫶 Ganzheitliche Gesundheit für Frauen
            </h3>
            <p className="pb-4">
              Meine Mission ist es, Frauen dabei zu unterstützen, eine tiefere
              Verbindung zu sich selbst und ihrem Zyklus herzustellen, um
              Expertinnen ihrer eigenen Gesundheit zu werden. Mein Ziel ist es
              dabei, Frauen zu mehr Energie, Wohlbefinden und Selbstbewusstsein
              zu verhelfen. 🔥
            </p>
            <p className="pb-4">
              Es ist an der Zeit, dass wir Frauen unsere innere Kraft, Stärke
              und Verbundenheit zeigen und selbstbewusst zu uns stehen. Doch das
              ist nur möglich, wenn wir Frauen aufgeklärt und ganzheitlich
              gesund sind - auf jeder Ebene. Deshalb setze ich mich dafür ein,
              dass der Zyklus als etwas Normales betrachtet und ohne Tabus offen
              diskutiert wird. 💪
            </p>

            <h3
              style={sourceSerif.style}
              className="pt-6 pb-2 text-base font-normal lg:text-lg"
            >
              Meine Expertise für dich & deine Gesundheit:
            </h3>

            <p>
              💫 Life Coach und Holistic Health & Wellness Coach (Fokus: Health
              & Wellness)
            </p>
            <p>💫 + Zusatzmodul speziell zum Thema Periodengesundheit (i.A.)</p>
            <p>💫 + Zusatzmodul über Darmgesundheit (i.A.)</p>
            <p>
              💫 Autodidaktische Aneignung zum Thema Zyklus und
              Zyklusbewusstsein
            </p>
            <p className="pb-4">
              💫 Meine eigenen Erfahrungen, damit du einen kürzen Weg gehen
              kannst
            </p>
            <h3
              style={sourceSerif.style}
              className="pt-6 pb-2 text-base font-normal lg:text-lg"
            >
              So kannst du mit mir zusammenarbeiten:
            </h3>
            <p className="pb-4">
              Im Rahmen meines 1:1-Coachings werden wir gemeinsam den Weg gehen,
              damit du deinen individuellen Zyklus besser verstehst und deine
              Gesundheit in die eigenen Hände nehmen kannst. Ich biete
              umfassende Unterstützung in den Bereichen Stressmanagement,
              Ernährung und Bewegung, damit du ganzheitlich gesund und im
              Einklang mit deinem Zyklus leben kannst.
            </p>
            <p className="pb-4">
              Lass uns zusammenarbeiten und deinen Weg zu mehr Energie,
              Wohlbefinden und Selbstbewusstsein einschlagen. Erfahre hier mehr
              darüber, wie ich dich auf deiner individuellen Reise unterstützen
              kann.
            </p>
            <p className="font-normal">Love, Franzi</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

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

export default ÜberMich;
