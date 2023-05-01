/* eslint-disable react/no-unescaped-entities */
import React from "react";

import { configQuery } from "@lib/groq";
import { sanityClient } from "@lib/sanity";
import Image from "next/image";

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
              Ich helfe dir gesund, ausgeglichen und erfüllt zu leben. 🌟
            </h2>
            <h3 className="pb-3 text-lg font-bold">Facts über mich:</h3>
            <p>🌸 28 Jahre alt</p>
            <p>💍 Bride to be (im Juni ist es soweit)</p>
            <p>💪 Fitness & Bewegung 💗</p>
            <p>🌳 Natur = Entschleunigung pur</p>
            <p>📖 Lesemaus</p>
            <p>🍕 Food-Lover</p>
            <p>🌎 Reisebegeistert: Biggest adventure startet im Juli</p>
            <p>😀 Lachen ist die beste Medizin</p>
            <p>🙌 Team: Positive & Growth Mindset</p>
            <h3 className="pt-6 pb-3 text-lg font-bold">
              Was mir besonders wichtig ist:
            </h3>
            ❤️ Meine liebsten Menschen.
            <p>❤️ Gesundheit.</p>
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
            <h3 className="pb-6 text-lg font-bold">
              Meine Leidenschaft für ganzheitliche Gesundheit und den weiblichen
              Zyklus:
            </h3>

            <p className="pb-6">
              Also... Bewegung gehörte für mich eigentlich schon seit der
              Kindheit zum Leben. Dass die Ernährung auch eine wichtige Rolle
              spielt, habe ich spätestens in meiner Ausbildung vor 10 Jahren
              gecheckt (Ich sage nur: Büro, Schoko und alleine wohnen). Ich habe
              mich immer mal in Sachen Ernährung ausprobiert, damals noch
              ziemlich blind und dem Trend folgend. Heute intuitiver,
              natürlicher und meinen Bedürfnissen entsprechend.
            </p>
            <p className="pb-6">
              Das Thema Selfcare und mentale Gesundheit ist zu meiner Priorität
              geworden, nachdem ich auf die unschöne Art lernen durfte, welchen
              Einfluss anhaltender starker Stress und Druck auf die allgemeine
              Gesundheit hat.
            </p>
            <p className="pb-6">
              Der Zyklus...Long Story short: Vor drei Jahren die Pille
              abgesetzt, mit Erschrecken festgestellt, dass ich bei NULL stehe -
              zumindest was meinen Zyklus angeht. Denn: Nach 10 Jahren
              Pilleneinnahme hatte ich 0 Ahnung und 0 Bewusstsein für meinen
              Zyklus, war maximal überfordert und wusste gar nicht wo ich
              anfangen soll. Dazu kamen Schmerzen, die ich durch die Pille
              natürlich nicht kannte; dachte es wäre normal → Spoiler: Ist es
              nicht.
            </p>
            <p className="pb-6">
              Ich verhüte seit Absetzen der Pille mithilfe der NFP-Methode mit
              trackle. Ich habe meine Zyklusphasen ab diesem Punkt quasi
              studiert, versucht mir so viel Wissen wie möglich über den Zyklus
              anzueignen, mich und meine Stimmungen beobachtet und ganz viel
              dokumentiert. Ich wurde mit der Zeit richtig dankbar für diesen
              immer wiederkehrenden Rhythmus, dem wir Frauen folgen. Ich habe
              die Analogien zu den Jahreszeiten verstanden und gefeiert.
              Gefeiert, dass ich ich bin. Dass mein Körper einfach seinem
              natürlichen Rhythmus nachgehen kann, mich mehr als Frau gefühlt.
            </p>
            <p className="pb-6">
              Ich habe erkannt, dass Gesundheit ein Zusammenspiel aus mehreren
              Faktoren ist und nicht nur einseitig z.B. aus Sicht der Ernährung
              betrachtet werden kann. Zudem darf nicht die Besonderheit, die wir
              als Frauen haben, vergessen werden; unseren Zyklus. Ganzheitliche
              Gesundheit für Frauen. 🤍
            </p>
            <p className="pb-6">
              Aufgrund meines Interesses und der eigenen Erfahrungen, habe ich
              auch ein großes Interesse daran, mich stets weiterzubilden und
              fachlich zu vertiefen.
            </p>
            <p className="pb-6">
              💫 Life Coach und Holistic Health & Wellness Coach (Fokus: Health
              & Wellness) 💫 + Zusatzmodul speziell zum Thema Periodengesundheit
              (i.A.) 💫 + Zusatzmodul über Darmgesundheit (i.A.) 💫
              Autodidaktische Aneignung zum Thema Zyklus und Zyklusbewusstsein.
            </p>
            <h3 className="pb-6 text-lg font-bold">
              Meine Mission mit Femlove:
            </h3>
            <p className="pb-6">
              All das führte mich letztendlich zu Femlove. Ich nutze Femlove als
              Blog und Ort, an dem ich mein Wissen, meine Erfahrungen, Tipps &
              Tricks mit dir teile. Denn...
            </p>
            <h3 className="pb-6 text-lg font-bold">
              Jede Frau - auch du - verdient es:
            </h3>
            <p className="pb-6">
              ✨ ganzheitlich gesund zu leben, ✨ sich selbst und ihren Zyklus
              besser kennenzulernen, ✨ zyklusgerecht- und bewusst zu leben, ✨
              das Gefühl zu haben, dass alles im Einklang ist, ✨ ausgeglichen,
              glücklich und selbstbewusst zu leben, ✨ sich selbst nicht aus den
              Augen zu verlieren, ✨ über sich hinauszuwachsen, ✨ trotz
              Zeitmangel etwas für ihre Gesundheit zu tun.
            </p>
            <p className="pb-6 font-bold">BE YOU. DO YOU. FOR YOU. ❤️</p>
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
