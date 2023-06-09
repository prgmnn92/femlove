/* eslint-disable react/no-unescaped-entities */
import React from "react";

import { configQuery } from "@lib/groq";
import { sanityClient } from "@lib/sanity";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/Container";
import CTA from "@/components/CTA";
import HeadingH1 from "@/components/headings/HeadingH1";
import Layout from "@/components/Layout";

const ÜberMich = ({ siteConfig }) => {
  return (
    <Layout {...siteConfig}>
      <section>
        <Container className="px-4 py-8 lg:py-12">
          <HeadingH1>Hi, ich bin Franzi</HeadingH1>
          <p className="text-center">
            Deine Holistic Health & Wellness Coachin
          </p>
        </Container>
      </section>
      <section>
        <Container className="flex flex-wrap pb-8">
          <div className="w-full pb-8 mb-10 lg:w-1/2 lg:mb-0 lg:text-lg lg:pr-12">
            <Image
              alt="feature"
              className="object-contain object-center w-full sticky top-[120px]"
              src="/images/me.webp"
              width={500}
              height={700}
            />
          </div>
          <div className="flex flex-col flex-wrap md:mb-10 lg:w-1/2 lg:text-left">
            <h2 className="pb-6 text-xl font-bold">
              Mit mir bringst du deine ganzheitliche Gesundheit auf ein neues
              Level. Ich helfe dir im Einklang mit deinem Zyklus zu leben,
              Stress, PMS & Co. loszuwerden und so zu mehr Energie, Wohlbefinden
              & Selbstbewusstsein zu gelangen. 🌟
            </h2>
            <h3 className="pb-3 text-lg font-bold">
              Damit du mich als Mensch hinter Femlove besser kennenlernst, hier
              ein paar Fakten <strong>über mich:</strong>
            </h3>
            <p>🌸 29 Jahre alt</p>
            <p>🥰 Frisch verheiratet</p>
            <p>💪 Fitness & Bewegung = 💗</p>
            <p>🌳 Natur = Entschleunigung pur</p>
            <p>📖 Lesemaus</p>
            <p>🍕 Food-Lover</p>
            <p>🌎 Reisebegeistert</p>
            <p>😀 Lachen ist die beste Medizin</p>
            <p>🙌 Team: Positive & Growth Mindset</p>
            <h3 className="pt-6 pb-3 text-lg font-bold">
              Was mir besonders wichtig ist:
            </h3>
            ❤️ Meine liebsten Menschen.
            <p>❤️ Ganzheitliche Gesundheit.</p>
            <p>❤️ Freiheit.</p>
            <p>❤️ Ehrlichkeit und Vertrauen.</p>
            <p className="pt-3">
              Und mich nicht mehr von negativen Glaubenssätzen und
              gesellschaftlichen Erwartungen leiten lassen. Mein Leben zu leben.
              Erfüllt und ausgeglichen. 😌
            </p>
          </div>
        </Container>
        <Container className="flex flex-wrap">
          <div className="flex flex-col flex-wrap mb-10 lg:w-1/2 lg:pr-12 lg:text-left">
            <h3 className="pb-6 text-lg font-bold">Wie ich zu Femlove kam:</h3>

            <p className="pb-6">
              Es fing alles mit dem Zyklus an... Vor einigen Jahren die Pille
              abgesetzt, mit Erschrecken festgestellt, dass ich bei null stehe -
              zumindest was meinen Zyklus angeht. Denn:{" "}
              <strong>
                Nach 10 Jahren Pilleneinnahme hatte ich null Ahnung und null
                Bewusstsein für meinen Zyklus, war total überfordert und wusste
                gar nicht wo ich anfangen sollte.
              </strong>
            </p>
            <p className="pb-6">
              Seitdem ich die Pille abgesetzt habe, verwende ich die NFP-Methode
              mit{" "}
              <Link
                className="text-blue-500"
                href="/post/erfahrungsbericht-trackle"
              >
                trackle
              </Link>{" "}
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
              Denn genau das verdienen wir alle: ein{" "}
              <strong>
                Bewusstsein für unseren eigenen Zyklus und unseren Körper, sowie
                mehr Selbstbewusstsein & Selbstliebe.
              </strong>{" "}
              So entstand femlove.blog. ✨
            </p>
            <p className="pb-6">
              Zudem ist der Zyklus ein{" "}
              <strong>wichtiges Vitalzeichen unserer Gesundheit.</strong> Dein
              Lebensstil, deine allgemeine Gesundheit und viele andere Faktoren
              beeinflussen deinen Zyklus. So zeigen sich Ungleichgewichte oft
              durch verstärktes PMS und/oder Periodenschmerzen.
            </p>
            <p className="pb-6">
              Auf meinem Blog vereine ich heute all diese Aspekte. Mein Ziel ist
              es, dass du ganzheitlich gesund bist und im Einklang mit deinem
              Zyklus leben kannst. Mir liegen insbesondere die Bereiche
              Stressmanagement, Ernährung und Bewegung am Herzen.
            </p>
            <p className="pb-6 font-bold">
              Kleiner Side-Fact, wofür der Name “Femlove” steht:
            </p>
            <p className="pb-3">
              👩 <strong>Fem</strong>: Steht für <strong>Feminität</strong>,
              Weiblichkeit, Frausein - all das, was uns Frauen ausmacht.
            </p>
            <p className="pb-6">
              🤍 <strong>Love</strong>: Das Love aus Selflove. Wenn wir Frauen
              uns mit uns als Frau, unserer Gesundheit und unseren Bedürfnissen
              auseinandersetzen, können wir gleichzeitig den Weg zu mehr
              <strong>Selbstliebe</strong> und -akzeptanz schaffen.
            </p>
            <h3 className="pb-6 text-lg font-bold">
              🫶 Ganzheitliche Gesundheit für Frauen
            </h3>
            <p className="pb-6">
              Meine Mission ist es, Frauen dabei zu unterstützen, eine tiefere
              Verbindung zu sich selbst und ihrem Zyklus herzustellen, um
              Expertinnen ihrer eigenen Gesundheit zu werden. Mein Ziel ist es
              dabei, Frauen zu mehr Energie, Wohlbefinden und Selbstbewusstsein
              zu verhelfen. 🔥
            </p>
            <p className="pb-6">
              Es ist an der Zeit, dass wir Frauen unsere innere Kraft, Stärke
              und Verbundenheit zeigen und selbstbewusst zu uns stehen. Doch das
              ist nur möglich, wenn wir Frauen aufgeklärt und ganzheitlich
              gesund sind - auf jeder Ebene. Deshalb setze ich mich dafür ein,
              dass der Zyklus als etwas Normales betrachtet und ohne Tabus offen
              diskutiert wird. 💪
            </p>

            <h3 className="pb-6 text-lg font-bold">
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
            <p className="pb-6">
              💫 Meine eigenen Erfahrungen, damit du einen kürzen Weg gehen
              kannst
            </p>
            <h3 className="pb-6 text-lg font-bold">
              So kannst du mit mir zusammenarbeiten:
            </h3>
            <p className="pb-6">
              Im Rahmen meines 1:1-Coachings werden wir gemeinsam den Weg gehen,
              damit du deinen individuellen Zyklus besser verstehst und deine
              Gesundheit in die eigenen Hände nehmen kannst. Ich biete
              umfassende Unterstützung in den Bereichen Stressmanagement,
              Ernährung und Bewegung, damit du ganzheitlich gesund und im
              Einklang mit deinem Zyklus leben kannst.
            </p>
            <p className="pb-6">
              Lass uns zusammenarbeiten und deinen Weg zu mehr Energie,
              Wohlbefinden und Selbstbewusstsein einschlagen. Erfahre hier mehr
              darüber, wie ich dich auf deiner individuellen Reise unterstützen
              kann.
            </p>
            <p>Love, Franzi</p>
          </div>
          <div className="relative w-full pb-8 mb-2 lg:w-1/2 lg:mb-0 lg:text-lg">
            <Image
              src={"/images/ueber_mich_2.webp"}
              width={700}
              height={500}
              alt="free women"
              className="sticky top-[120px] lg:max-w-[480px] max-w-full"
            />
          </div>
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
      siteConfig: { ...config },
      preview,
    },
    revalidate: 100,
  };
}

export default ÜberMich;
