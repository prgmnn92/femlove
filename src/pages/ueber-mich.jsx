/* eslint-disable react/no-unescaped-entities */
import React from "react";

import { configQuery } from "@lib/groq";
import { sanityClient } from "@lib/sanity";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";
import Layout from "@/components/Layout";
import Banner from "@/components/sections/Banner";
import { sourceSerif } from "@/fonts";

const ÜberMich = ({ siteConfig }) => {
  return (
    <Layout {...siteConfig}>
      <Banner
        title="Hi, ich bin Franziska"
        text="Herzlich Willkommen in meiner Welt."
        subtitle="Über mich"
      />
      <section className="py-16 mt-[-64px] bg-[#F4F4F4] px-4 rounded-[56px] relative z-20">
        <div className="container max-w-4xl mx-auto ">
          <div className="flex flex-col-reverse items-start justify-between w-full max-w-5xl gap-8 mx-auto lg:mb-4 lg:flex-row">
            <div>
              <p className="pb-8 text-sm font-light lg:text-lg">
                Vielleicht geht es dir ja wie mir in der Vergangenheit: Du hast
                eigentlich alles, was “von außen” nach einem “perfekten” Leben
                aussieht, erwischst dich aber immer wieder mit diesen
                Unzufriedenheitsgedanken? War’s das schon? Kannst deine
                Stimmungen manchmal selbst nicht verstehen? Fühlst dich von dir
                disconnected und funktionierst gefühlt nur, um die Bedürfnisse
                anderer zu erfüllen?
              </p>
              <p className="pb-8 text-sm font-light lg:text-lg">
                Also: Findest du dich auf irgendeine Art wieder, ich verstehe
                dich zu 100%. Hab all das durch und möchte dich nun an die Hand
                nehmen, damit auch du deinen Weg in ein erfülltes,
                selbstbestimmtes und gesundes Leben erschaffen kannst.
              </p>
              <p className="pb-8 text-sm font-light lg:text-lg">
                Hier erfährst du nun erstmal mehr über mich und Femlove.
              </p>
            </div>
            <Image
              alt="feature"
              className="object-contain object-center w-full rounded-[14px] aspect-auto border-8 border-white border-solid lg:mt-4"
              src="/images/franzi.webp"
              width={250}
              height={400}
            />
          </div>
          <h3 className="pb-2 text-base lg:text-lg" style={sourceSerif.style}>
            Starten wir mal mit ein paar Facts über mich:
          </h3>
          <div className="text-sm font-light columns-2 lg:text-lg">
            <p>🌸 29 Jahre alt</p>
            <p>🥰 Frisch verheiratet</p>
            <p>😀 Good-Mood-Girl</p>
            <p>🌎 Reise aktuell quer durch Südostasien</p>
            <p>🌇 Sunset-Lover</p>
            <p>💪 Fitness & Bewegung = 💗</p>
            <p>📖 Lesemaus</p>
            <p>🍕 Foodie</p>
            <p>🙌 Team Positive & Growth Mindset</p>
            <p>🙅‍♀️ Äußere Erwartungen</p>
          </div>
          <h3
            className="pt-6 pb-2 text-base lg:text-lg"
            style={sourceSerif.style}
          >
            Das ist mit besonders wichtig:
          </h3>
          <div className="pb-6 text-sm font-light columns-2 lg:text-lg">
            <p>❤️ Meine liebsten Menschen.</p>
            <p>❤️ Gesundheit.</p>
            <p>❤️ Freiheit.</p>
            <p>❤️ Ehrlichkeit und Vertrauen.</p>
          </div>

          <div className="flex flex-col flex-wrap md:mb-10 lg:w-1/2 lg:text-left"></div>
        </div>
        <div className="container max-w-4xl mx-auto ">
          <div className="flex flex-col flex-wrap mb-10 text-sm font-light lg:pr-12 lg:text-left lg:text-lg">
            <h3
              className="pb-2 text-base font-normal lg:text-lg"
              style={sourceSerif.style}
            >
              Femlove…
            </h3>
            <p className="pb-4">
              Vor ca. einem Jahr startete ich mit Femlove - einem Blog rund um
              den weiblichen Zyklus.
            </p>
            <p className="pb-4">
              Warum Zyklus? Ich war und bin begeistert von unserem Zyklus und
              wie er unser Leben beeinflusst, wollte mit meinem Blog für noch
              mehr Zykluswissen sorgen, denn ich - wie so viele andere Frauen
              auch - stand vor etwa 3 Jahren nach dem Pille Absetzen bei Null,
              was meinen Zyklus anging.
            </p>
            <p className="pb-2">
              Außerdem habe ich gelernt, dass der Zyklus bei mir einen wichtigen
              Part auf dem Weg zu mehr Selbstliebe eingenommen hat und so
              entstand übrigens auch der Name Femlove:
            </p>
            <p className="pb-2">
              “Fem” für Feminität, Weiblichkeit, Frausein - all das, was uns
              Frauen ausmacht. “Love” für den Weg zu mehr Selbstliebe,
              -akzeptanz und -vertrauen.
            </p>
            <div className="grid items-start max-w-2xl grid-cols-1 py-4 mx-auto gap-x-8 gap-y-4 sm:gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="relative px-6 pt-96 overflow-hidden bg-gray-900 rounded-[14px] pb-9 sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 border-8 border-white border-solid ">
                <Image
                  src={"/images/ueber1.jpg"}
                  className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full"
                  width={400}
                  height={600}
                  alt=""
                />
              </div>
              <div>
                <p className="pb-4">
                  Mit der Zeit durfte ich lernen, dass ich so viel mehr mit dir
                  teilen möchte. Es ist an der Zeit für eine kleine Veränderung…
                </p>
                <p className="pb-4">
                  Ich beschäftige mich schon seit mehreren Jahren intensiv mit
                  Themen wie Persönlichkeitsentwicklung und
                  Selbstverwirklichung, gesellschaftliche Erwartungen und
                  Entwicklungen… Themen, über die ich stundenlang reden könnte.
                  Übrigens: Deep Talk? I’m in. Warum ich damals keinen Blog dazu
                  gestartet habe? Keine Ahnung. Dennoch bin ich um ein Jahr
                  Erfahrung reicher und kombiniere meine Herzensthemen zu einem
                  Herzensprojekt.
                </p>
              </div>
            </div>
            <p className="pb-4">
              Denn ich bin fest davon überzeugt, dass uns ein zyklusbewusster
              Lifestyle - also die Verbindung zu unserem Zyklus - einen Schritt
              weiter zu uns selbst bringt. Zyklusbewusstsein hilft dir eine
              tiefere Verbindung zu dir und deinen Bedürfnissen herzustellen -
              dich besser zu verstehen.
            </p>
            <p className="pb-4">
              Ich nutze diesen Ansatz und gehe einen Schritt weiter.
            </p>
            <p className="pb-4">
              Bei Femlove geht es nun vielmehr um dich und dein Leben: Um
              Selbstverwirklichung. Hol das Beste aus dir heraus, step into your
              real power, und lebe ein erfülltes, selbstbestimmtes und
              ausgeglichenes Leben.
            </p>
            <p>
              Auf meinem Blog, Instagram und YouTube wie auch in meinem
              Newsletter erhältst du diversen kostenlosen Content. Ich - als
              Franziska Pargmann - stehe dir für die intensive Zusammenarbeit im
              Rahmen von 1:1 Coachings voll und ganz zur Verfügung. Ich zeige
              dir, wie du mehr aus deinem Leben herausholen kannst, wie du dich
              aus deinem Hamsterrad befreien kannst, wie du deinen Traum wahr
              werden lassen kannst - oder vielleicht auch einfach deinen
              Lifestyle ändern möchtest. Here I am: Mit mir als Coachin an
              deiner Seite wirst du nicht so schnell aufgeben. Du bekommst über
              mehrere Wochen meinen vollen Support, individuelle Strategien &&&
              - je nachdem, wo dein Bedarf am größten ist.
            </p>
            <div className="py-8 text-center">
              <Link href="/angebot">
                <Button title="Zu meinem Angebot" />
              </Link>
            </div>
            <p className="pb-4">
              Natürlich kann ich auch etwas mehr bieten als meine eigene
              Erfahrung:
            </p>

            <p className="pb-2 text-xs lg:text-base">
              🫧 Life Coachin, Holistic Health & Wellness Coachin
            </p>
            <p className="pb-2 text-xs lg:text-base">
              🫧 + Zusatzmodul zum Thema Periodengesundheit (i.A.)
            </p>
            <p className="pb-2 text-xs lg:text-base">
              🫧 + Zusatzmodul zum Thema Darmgesundheit (i.A.)
            </p>
            <p className="pb-2 text-xs lg:text-base">
              🫧 Autodidaktische Aneignung zum Thema Zyklus & Zyklusbewusstsein
            </p>
            <p className="pb-2 text-xs lg:text-base">
              🫧 Autodidaktische Aneignung zum Thema Persönlichkeitsentwicklung
            </p>
            <p className="pb-2 text-xs lg:text-base">
              🫧 Autodidaktische Aneignung zum Thema Achtsamkeit
            </p>
            <div className="grid items-start max-w-2xl grid-cols-1 py-4 mx-auto gap-x-8 gap-y-4 sm:gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div>
                <p className="pb-4">
                  Meine Mission ist es, Frauen zu einem Leben im Einklang mit
                  ihrem Zyklus, in dem sie mehr Energie haben, sich selbst
                  priorisieren, ihren Bedürfnissen und Leidenschaften nachgehen,
                  sich selbst ein Leben voll Selbstverwirklichung erschaffen.{" "}
                </p>
                <p className="pb-4">
                  You can do this! Sei mutig und geh für dich los.
                </p>

                <p className="pb-4">
                  Deine
                  <br />
                  Franziska
                </p>
              </div>
              <div className="relative px-6 pt-80 overflow-hidden bg-gray-900 rounded-[14px] pb-9 sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 border-8 border-white border-solid ">
                <Image
                  src={"/images/ueber2.jpg"}
                  className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full"
                  width={400}
                  height={600}
                  alt=""
                />
              </div>
            </div>
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
