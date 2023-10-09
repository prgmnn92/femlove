/* eslint-disable react/no-unescaped-entities */
import React from "react";

import { configQuery } from "@lib/groq";
import { sanityClient } from "@lib/sanity";
import Image from "next/image";
import Link from "next/link";

import Layout from "@/components/Layout";
import { sourceSerif } from "@/fonts";

const Quote = (props) => {
  return (
    <div className="py-[4px] flex gap-[10px]">
      <div className="min-w-[6px] min-h-full bg-[#D0D9D7]"></div>
      <div className="text-sm italic font-semibold md:text-base">
        {props.children}
      </div>
    </div>
  );
};

const ÜberMich = ({ siteConfig }) => {
  return (
    <Layout {...siteConfig}>
      {/* Hero Section */}
      <section className="px-6 pb-16 lg:pt-[24vh] pt-24 bg-white lg:px-8">
        <div className="container max-w-5xl mx-auto ">
          <div className="flex flex-col gap-8 md:gap-12 md:flex-row">
            <div className="relative md:min-w-[290px] min-h-[390px] min-w-full rounded-t-[300px] overflow-hidden">
              <Image
                src={"/images/ich_oben.webp"}
                width={289}
                height={387}
                alt="Bild von Franziska"
                className="absolute object-cover w-full h-full"
                priority
              />
            </div>
            <div className="text-sm md:text-base">
              <h1
                style={sourceSerif.style}
                className="mb-4 text-4xl md:mb-6 md:text-5xl"
              >
                Hi, ich bin Franziska
              </h1>
              <p className="mb-3 md:mb-4">
                Der Mensch hinter Femlove und Life Coachin für Frauen.
              </p>
              <p className="mb-3 md:mb-4">
                Was ich noch so bin? Reisende, Sunset-Lover, Journal-Queen,
                Supporterin in allen Lebenslagen und Good-Mood-Girl. 🌞
              </p>
              <p className="mb-3 md:mb-4">
                Vor allem aber, bin ich hier, um dir zu helfen - denn vor gar
                nicht all zu langer Zeit stand ich selbst da: Unzufrieden und
                unerfüllt, keine Verbindung zu mir und meinen Bedürfnissen...
                den Rest darfst du gleich erfahren.
              </p>
              <p className="mb-3 md:mb-4">
                Also, schnapp dir einen Kaffee oder Tee und tauche in meine
                Geschichte ein. 👇
              </p>
              <Quote>
                Den mühsam erstrebten Weg und den Ausblick auf eine steile
                Karriere habe ich mit 29 Jahren aufgegeben. Mein Drang nach
                Freiheit und Unabhängigkeit führte mich ans andere Ende der
                Welt. Und jetzt schreibe ich meine eigene Geschichte.✨
              </Quote>
            </div>
          </div>
        </div>
      </section>
      {/* Über mich section 1  */}
      <section className="px-6 pb-16 lg:px-8">
        <div className="container max-w-5xl mx-auto ">
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
            <div className="text-sm text-justify md:text-base">
              <h2
                style={sourceSerif.style}
                className="mb-4 text-3xl text-left md:mb-6 md:text-4xl"
              >
                Ich hatte <em>eigentlich</em> alles...
              </h2>
              <p className="mb-3 md:mb-4">
                Lange Zeit hatte ich alles, was nach einem perfekten Leben
                aussieht. Jegliche Abschlüsse, einen unbefristeten und gut
                bezahlten Job, eine stabile Beziehung und und und.
              </p>
              <p className="mb-3 md:mb-4">
                Doch tief im Inneren spürte ich keine Erfüllung. Mich überkam
                immer wieder Unzufriedenheit und Frust - beides konnte ich aber
                nicht richtig zuordnen. Ich hatte doch ein gutes Leben, warum
                sollte ich unzufrieden sein?
              </p>
              <p className="mb-3 md:mb-4">
                Mir fehlte der Bezug zu mir, ich habe so lange fleißig daran
                gearbeitet, mir eine klassische Karriere aufzubauen, dass ich
                komplett vergessen (oder verdrängt?) habe, wer ich bin, welche
                Leidenschaften ich habe, was ich vom Leben möchte und was denn
                noch so möglich ist. Stattdessen war ich das fleißige Bienchen,
                das nicht nein sagen konnte, ihre eigenen Bedürfnisse hinten
                anstellt und sich sehr von äußeren Erwartungen leiten lassen
                hat. Ich habe mir bis dahin ein Leben erschaffen, mit dem ich
                mich nicht ganz identifizieren konnte.
              </p>
            </div>
            <div className="relative min-w-[273px] min-h-[235px] overflow-hidden rounded-[14px]">
              <Image
                width={273}
                height={235}
                src={"/images/bild_mitte.webp"}
                alt="Bild einer Tasse auf einem Buch"
                className="absolute object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Über mich section mit container */}
      <section className="pb-16 md:pb-32 lg:px-8">
        <div className="container md:max-w-[822px] w-full bg-[#F4F4F4] md:p-16 p-6 mx-auto rounded-[14px] relative">
          <div className="absolute w-[178px] h-[295px] -bottom-16 -left-32 overflow-hidden rounded-[14px] hidden md:block">
            <Image
              width={178}
              height={295}
              src={"/images/bild_unten.webp"}
              alt="Hand streicht über gras"
              className="absolute object-cover w-full h-full"
            />
          </div>
          <div className="text-sm text-justify md:text-base">
            <h2
              style={sourceSerif.style}
              className="mb-4 text-3xl text-left md:mb-6 md:text-4xl"
            >
              Von der Zuschauerin zur <em>Hauptfigur</em>
            </h2>
            <p className="mb-3 md:mb-4">
              Mein Blickwinkel änderte sich komplett. Ich richtete den Blick auf
              mich und mein Leben. Blickte meiner Wahrheit ins Gesicht, lernte
              mich selbst besser kennen und fing an, mich nach und nach von
              äußeren Erwartungen, aber auch von meinen alten Glaubenssätzen zu
              befreien. Ich erlaubte mir, endlich für mich loszugehen und nicht
              mehr nur vom Zuschauerrand mein Leben zu betrachten. 
            </p>
            <p className="mb-3 md:mb-4">
              🪄 heute reise ich durch Südostasien und baue mir nebenbei ein
              Leben nach meinen Vorstellungen und Werten auf. Ich glaube an mich
              und an den Weg, der mich an mein Ziel bringen wird. Lasse mich
              nicht mehr von Ängsten und alten Glaubenssätzen aufhalten. 
            </p>
            <p className="mb-3 md:mb-4">
              Ok ok, verstanden, denkst du dir. Aber was hat der Zyklus damit zu
              tun?
            </p>
            <p className="mb-3 md:mb-4">
              Mit dem Bewusstsein und der Verbindung mit meinem Zyklus und
              dessen Einfluss auf meinen Alltag, fing ich an, meine Bedürfnisse
              zu erkennen. Den Druck gegenüber mir selbst herauszunehmen, mich
              selbst besser zu akzeptieren und zu lieben - mich auch mehr als
              Frau zu fühlen. Ich bin davon überzeugt, dass sich jede Frau
              dessen bewusst werden sollte, um sich selbst besser zu verstehen.
            </p>
            <div className="pt-4 pb-8">
              <Quote>
                Der Zyklus ist so viel mehr als nur die Periode. Es geht um
                tiefe Verbindung und Intuition. Um Selbstannahme und
                Selbstliebe. Um das Verstehen und Achten der eigenen Bedürfnisse
                und Grenzen.💖
              </Quote>
            </div>
            <p className="mb-3 md:mb-4">
              Ich glaube fest daran, dass du das auch kannst. Nein, du musst
              nicht reisen oder dein Business aufbauen. Ich meine: Dir ein Leben
              zu erschaffen, in dem du{" "}
              <strong>Erfüllung und Leichtigkeit</strong> spürst - dich von
              ständiger Unzufriedenheit, Frust und Ängsten befreist. Ein Leben
              nach deinen Werten, in dem du dich selbst verwirklichst und
              <strong> inneren Frieden</strong> findest. Und dafür bin ich hier.
              Für dich.
            </p>
          </div>
        </div>
      </section>
      {/* Über mich section 2 */}
      <section className="px-6 pb-32 lg:px-8">
        <div className="container max-w-5xl mx-auto ">
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
            <div className="text-sm text-justify md:text-base">
              <h2
                style={sourceSerif.style}
                className="mb-4 text-3xl text-left md:mb-6 md:text-4xl"
              >
                Du darfst dir <em>Unterstützung</em> auf deiner persönlichen
                Journey holen
              </h2>
              <p className="mb-3 md:mb-4">
                Den Wunsch nach Veränderung, Wachstum und Erfüllung haben so
                viele Frauen! Doch nur ein Bruchteil geht wirklich für sich los.
                Warum? Ängste, limitierende Glaubenssätze, mangelndes
                Selbstvertrauen und Mut sind nur einige der Herausforderungen.
                Dazu erlauben sie sich nicht, Unterstützung zu holen.
              </p>
              <p className="mb-3 md:mb-4">
                Lass uns auch genau daran arbeiten. Für deine Reise zu dir
                selbst. Für deine Träume. Entdecke deine Leidenschaft, deine
                Stärken und erschaffe dir ein Leben, in dem du Erfüllung,
                Leichtigkeit und tiefe Verbindung spürst.
              </p>
              <p className="mb-3 md:mb-4">Denn genau das verdienst du. 🫶</p>
              <p className="mb-3 md:mb-4">
                In meinem Coaching verbinde ich den Weg zur Selbstfindung und
                Verwirklichung mit der Kraft des weiblichen Zyklus.
              </p>
              <p className="mb-6 md:mb-8">
                Ich biete verschiedene Coaching-Programme, aber auch
                individuelle Einzelstunden und Begleitungen an. Schau direkt mal
                in meinem Angebot vorbei:
              </p>
              <Link
                className={`relative z-20 duration-300 rounded-[14px] transition-colors focus:outline-none focus:ring-2 focus:ring-white/10 focus:ring-offset-2  border-[1px] border-solid border-f-brown cursor-pointer px-5 py-2 text-sm text-white bg-f-brown hover:text-f-brown font-medium  hover:bg-white`}
                href={"/angebot"}
                aria-label="zu meinem angebot"
              >
                Zum Coaching-Angebot
              </Link>
            </div>
            <div className="relative">
              <div
                className="absolute -top-8 -right-12 rotate-[20deg] text-2xl"
                style={sourceSerif.style}
              >
                <em>Let’s do this 🔥</em>
              </div>
              <div className="relative md:min-w-[290px] min-h-[390px] min-w-full rounded-t-[300px] overflow-hidden">
                <Image
                  src={"/images/ich_unten.webp"}
                  width={289}
                  height={387}
                  alt="Bild von Franziska"
                  className="absolute object-cover w-full h-full"
                />
              </div>
              <p className="text-xs">
                zert. Life Coachin
                <br />& Holistic Health & Wellness Coachin
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export async function getStaticProps({ params, preview = false }) {
  const configs = await sanityClient.fetch(configQuery);
  const siteConfig = configs.find(
    (config) => config.url == "https://femlove.blog/ueber-mich"
  );
  return {
    props: {
      siteConfig: { ...siteConfig },
    },
    revalidate: 100,
  };
}

export default ÜberMich;
