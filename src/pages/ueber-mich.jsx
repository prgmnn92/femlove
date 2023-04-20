/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from "react";

import { configQuery } from "@lib/groq";
import { sanityClient } from "@lib/sanity";
import Image from "next/image";

import Button from "@/components/Button";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import HeadingH1 from "@/components/headings/HeadingH1";
import Layout from "@/components/Layout";
import { ModalContext } from "@/ModalContext";

// const ReactPlayer = dynamic(() => import("react-player/youtube"), {
//   ssr: false,
// });

const ÜberMich = ({ siteConfig }) => {
  const openModal = useContext(ModalContext);

  return (
    <Layout {...siteConfig}>
      <section>
        <Container className="px-4 py-8 lg:py-12">
          <HeadingH1>Hi! Ich bin Franzi.</HeadingH1>
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
            <p className="pb-6">
              Ich bin 28 Jahre alt und freue mich aktuell sehr auf meine
              Hochzeit im Juni. I am so excited! 👰💍
            </p>
            <p className="pb-6">
              Neben meinem 9-to-5-Job und der Arbeit an Femlove, bin ich
              unheimlich gerne in Bewegung. Am liebsten draußen in der Natur
              oder im Fitnessstudio. 🌳 💪🏼
            </p>
            <p className="pb-6">
              Halbmarathon ✅, 100 km Rennradtour ✅, Liebe fürs Krafttraining
              entdeckt ✅. You see? Ich bin ziemlich vielseitig und
              begeisterungsfähig in Sachen Sport unterwegs. 🤍
            </p>
            <p className="pb-6">
              Ansonsten verbringe ich aber auch einfach mal Zeit auf der Couch
              mit einem guten Buch, denn lesen ist für mich ein Teil meiner
              Selfcare-Routine. Love it. Was ich noch liebe? Essen. Genießen.
              🥗🍎🍫🍕
            </p>
            <p className="pb-6">
              Ich bin absolut reisebegeistert und freue mich schon riesig
              darauf, im Juli mit meinem (zukünftigen) Mann auf eine sehr große
              Reise zu gehen. Geplant ist etwa ein Jahr, aber wir sind total
              offen und wollen schauen, was sich ergibt. Damit wird für uns
              beide ein großer Traum wahr! 🌍 😍
            </p>
            <p className="pb-6">
              Kleiner Side-Fact: Es vergeht eigentlich kein Tag, an dem ich
              nichts zu lachen habe. Lachen ist doch das Herrlichste und die
              beste Medizin! 😁
            </p>
            <p className="pb-6">
              Ich liebe es mich persönlich weiterzuentwickeln und mich neuen
              Herausforderungen zu stellen, um über mich hinauszuwachsen.
              Außerhalb der Komfortzone gibt es nämlich viel zu entdecken. 🚀
              Mein Journal ist mein treuer Begleiter durch die Hochs und Tiefs
              des Lebens. Jep, denn auch ich habe meine Tiefs, Schwächen und
              Herausforderungen, doch ich versuche stets, mit einem positiven
              Mindset an die Dinge heranzugehen. Sie sind Teil des Lebens und es
              liegt letztlich an uns, wie wir damit umgehen.
            </p>
            <p className="pb-6">
              Meine wichtigsten Werte sind: Meine liebsten Menschen, Gesundheit,
              Freiheit, Ehrlichkeit und Vertrauen. Und mich nicht mehr von
              negativen Glaubenssätzen wie auch gesellschaftlichen Erwartungen
              leiten zu lassen. Mein Leben zu leben. Erfüllt und ausgeglichen.
              😌
            </p>
          </div>
        </Container>
        <Container className="flex flex-wrap">
          <div className="flex flex-col flex-wrap mb-10 lg:w-1/2 lg:pr-12 lg:text-left">
            <p className="pb-6">
              Meine Leidenschaft für ganzheitliche Gesundheit und den weiblichen
              Zyklus:
            </p>

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
            <p className="pb-6">Meine Mission mit Femlove:</p>
            <p className="pb-6">
              All das führte mich letztendlich zu Femlove. Ich nutze Femlove als
              Blog und Ort, an dem ich mein Wissen, meine Erfahrungen, Tipps &
              Tricks mit dir teile. Denn...
            </p>
            <p className="pb-6">Jede Frau - auch du - verdient es:</p>
            <p className="pb-6">
              ✨ ganzheitlich gesund zu leben, ✨ sich selbst und ihren Zyklus
              besser kennenzulernen, ✨ zyklusgerecht- und bewusst zu leben, ✨
              das Gefühl zu haben, dass alles im Einklang ist, ✨ ausgeglichen,
              glücklich und selbstbewusst zu leben, ✨ sich selbst nicht aus den
              Augen zu verlieren, ✨ über sich hinauszuwachsen, ✨ trotz
              Zeitmangel etwas für ihre Gesundheit zu tun.
            </p>
            <p className="pb-6">BE YOU. DO YOU. FOR YOU. ❤️</p>
            <p className="pb-6">So kannst du mit mir zusammenarbeiten:</p>
            <p className="pb-6">
              Bist du bereit für den DEEP DIVE und deine Gesundheit in die Hand
              zu nehmen? Bist du bereit deine Gesundheit auf ein neues Level zu
              bringen? Endlich deine Zyklusbeschwerden zu lindern?
            </p>
            <p className="pb-6">Dann lass uns 1:1 zusammenarbeiten. 🙌</p>
            <p className="pb-6">
              Melde dich hier für ein unverbindliches, kostenfreies
              Kennenlerngespräch an:
            </p>
            <p className="pb-6">
              <Button
                className={"bg-f-main text-white"}
                onClick={() => openModal()}
              >
                Kostenloses Kennenlerngespräch
              </Button>
            </p>
            <p className="pb-6">
              Dort lernen wir uns kennen und schauen, ob und wie ich dich in
              meinem 1:1 Coaching unterstützen kann.
            </p>
            <p className="pb-6">Ich freue mich! 🔥</p>
          </div>
          <div className="relative w-full pb-8 mb-10 lg:w-1/2 lg:mb-0 lg:text-lg">
            {/* <ReactPlayer
              url="https://www.youtube.com/watch?v=5ah_cRdRSTM&t=6s"
              width="100%"
              height="100%"
            /> */}
            <Image
              src={"/images/ueber_mich_2.webp"}
              width={700}
              height={500}
              alt="free women"
              className="sticky top-[120px] max-w-[480px]"
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
