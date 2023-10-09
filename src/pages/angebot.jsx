/* eslint-disable react/no-unescaped-entities */
import React from "react";

import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { configQuery } from "@lib/groq";
import { sanityClient } from "@lib/sanity";
import Image from "next/image";
import Link from "next/link";

import Layout from "@/components/Layout";
import InTouch from "@/components/sections/InTouch";
import { sourceSerif, josefineSans } from "@/fonts";

const faqs = [
  {
    question: "Wie läuft ein Kennenlerngespräch ab? Muss ich mich vorbereiten?",
    answer:
      "In unserem Kennenlerngespräch gibt es keinen starren Ablauf. Du musst dich nicht vorbereiten. Für mich ist wichtig, dass wir beide uns kennenlernen, du mir bereits einen ersten Einblick in deine Situation gibst - wir schauen einfach, ob es zwischen uns matcht und wie ich dich unterstützen kann.",
  },
  {
    question:
      "Kann ich auch nach einem Programm die Zusammenarbeit mit dir verlängern?",
    answer:
      "Natürlich. Gerne begleite ich dich auch nach einem Programm weiter auf deiner persönlichen Journey - das können wir dann ganz individuell vereinbaren.",
  },
  {
    question:
      "Muss ich wöchentliche Calls wahrnehmen oder können wir das auch auf zweiwöchentliche Calls ausweiten?",
    answer:
      "Ich empfehle - gerade zu Beginn - wöchentliche Coaching-Calls. Es gibt auch die Möglichkeit alle zwei Wochen einen Call durchzuführen. Das können wir dann gerne in einem Kennenlerngespräch absprechen.",
  },
  {
    question: "Wie viel kostet ein einzelner Coaching Call?",
    answer:
      "Ein einzelner Coaching-Call startet bei 69 Euro für eine volle Stunde.",
  },
  {
    question:
      "Was ist, wenn ich einen Coaching-Call im Rahmen des Programms nicht wahrnehmen kann?",
    answer:
      "Falls du einen Termin nicht wahrnehmen kannst, können wir ihn nach Rücksprache gerne verschieben.",
  },
  {
    question:
      "Ich weiß jetzt noch gar nicht so recht, was ich will/was meine größte Hürde ist/wo ich hin will usw. Kann ich trotzdem dein Coaching in Anspruch nehmen?",
    answer:
      "Klar! Genau dafür bin ich auch da. Buche dir direkt ein unverbindliches Kennenlerngespräch und wir schauen gemeinsam, wie ich dich in deinem Fall am besten unterstützen kann.",
  },
  {
    question:
      "Ich habe Angst, was die anderen denken könnten, wenn ich mit eine Life Coachin als Unterstützung nehme. Ist das normal?",
    answer:
      "Von diesem Gedanken darfst du dich distanzieren, aber genau daran arbeiten wir auch. :) Dass du dir Unterstützung auf deiner persönlichen Journey holst, zeigt doch dass du es richtig angehst, dass du der Veränderung und Hilfe nicht scheust. Steh dazu: In ein paar Wochen wirst du ganz anders darüber denken. Mach dir hier ruhig bewusst, dass du das nur für dich tust. Für deine persönliche Entwicklung. Für inneren Frieden. Für ein leichteres Leben.",
  },
];

const Angebot = ({ siteConfig }) => {
  return (
    <Layout {...siteConfig}>
      {/* Hero Section */}
      <section className="px-6 pb-16 lg:pt-[24vh] pt-24 bg-white lg:px-8">
        <div className="container max-w-5xl mx-auto ">
          <div className="flex flex-col-reverse gap-8 md:gap-12 md:flex-row">
            <div className="text-sm md:text-base">
              <p
                style={josefineSans.style}
                className="mb-3 text-sm font-light uppercase"
              >
                1:1 Life Coaching für Frauen
              </p>
              <h1
                style={sourceSerif.style}
                className="mb-4 text-4xl md:mb-6 md:text-5xl"
              >
                Bist du bereit für <em>dich</em> loszugehen?
              </h1>
              <p className="max-w-xl mb-6 md:mb-8">
                In meinen 1:1 Coaching unterstütze ich dich dabei, dich mit dir
                zu verbinden, deine Einzigartigkeit zu erkennen, inneren Frieden
                zu finden und endlich die Schritte zu gehen, die dich näher an
                ein erfülltes und selbstbestimmtes Leben bringen.
              </p>
              <div>
                <Link
                  className={`relative z-20 duration-300 rounded-[14px] transition-colors focus:outline-none focus:ring-2 focus:ring-white/10 focus:ring-offset-2  border-[1px] border-solid border-f-brown cursor-pointer px-5 py-2 text-sm text-white bg-f-brown hover:text-f-brown font-medium  hover:bg-white`}
                  href={"/angebot#offer"}
                  aria-label="zu meinem angebot"
                >
                  Yesss! Zeig mir deine 1:1 Angebote
                </Link>
              </div>
            </div>
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
          </div>
        </div>
      </section>
      {/* small Banner */}
      <section className="py-3 md:py-4 bg-[#D0D9D7]">
        <p
          style={josefineSans.style}
          className="text-xs text-center text-white uppercase md:text-sm"
        >
          be different. break barriers. be brave and live the life you deserve.
        </p>
      </section>
      {/* features section  */}
      <section className="px-6 md:py-20 py-16 bg-[#F4F4F4] lg:px-8">
        <div className="container max-w-5xl mx-auto ">
          <div className="flex flex-col justify-between gap-4 md:gap-8 md:flex-row">
            <div className="h-[220px] shadow-lg w-full relative flex justify-center items-center overflow-hidden rounded-[14px]">
              <h2
                style={sourceSerif.style}
                className="text-2xl md:text-3xl text-white text-center mx-auto md:max-w-[250px] max-w-[220px] relative z-10"
              >
                Spüre tiefe Verbundenheit
              </h2>
              <Image
                src={"/images/angebot_feature-t-1.webp"}
                width={290}
                height={220}
                alt="Hände mit mandarine"
                className="absolute top-0 bottom-0 left-0 right-0 object-cover min-w-full min-h-full"
              />
            </div>
            <div className="h-[220px] shadow-lg w-full relative flex justify-center items-center overflow-hidden rounded-[14px]">
              <h2
                style={sourceSerif.style}
                className="text-2xl md:text-3xl text-white text-center mx-auto md:max-w-[250px] max-w-[220px] relative z-10"
              >
                Erkenne deine Einzigartigkeit
              </h2>
              <Image
                src={"/images/angebot_feature-t-2.webp"}
                width={290}
                height={220}
                alt="Hände mit mandarine"
                className="absolute top-0 bottom-0 left-0 right-0 object-cover min-w-full min-h-full"
              />
            </div>
            <div className="h-[220px] shadow-lg w-full relative flex justify-center items-center overflow-hidden rounded-[14px]">
              <h2
                style={sourceSerif.style}
                className="text-2xl md:text-3xl text-white text-center mx-auto md:max-w-[250px] max-w-[220px] relative z-10"
              >
                Finde inneren Frieden
              </h2>
              <Image
                src={"/images/angebot_feature-t-3.webp"}
                width={290}
                height={220}
                alt="Hände mit mandarine"
                className="absolute top-0 bottom-0 left-0 right-0 object-cover min-w-full min-h-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/* problem section */}
      <section className="px-6 py-16 bg-white md:pt-24 md:pb-36 lg:px-8">
        <div className="container max-w-5xl mx-auto ">
          <div className="flex flex-col justify-between gap-8 md:gap-16 md:flex-row">
            <div className="max-w-[650px] text-sm md:text-base">
              <h2
                style={sourceSerif.style}
                className="mb-4 text-3xl text-left md:mb-6 md:text-4xl"
              >
                Hörst du die <em>Stimme aus deinem Herzen?</em>
              </h2>
              <p className="mb-3 md:mb-4">
                Ich weiß genau wie das ist... Eigentlich hast du alles. Aber du
                fühlst dich, als würdest du irgendwie feststecken, bist immer
                wieder unzufrieden und frustriert, weißt, dass dich dein Status
                Quo eigentlich nicht erfüllt, aber ignorierst immer wieder diese
                kleine Stimme aus deinem Herzen.
              </p>
              <p className="mb-3 md:mb-4">
                Redest sie weg, indem du dir sagst: “Jetzt ist es eh zu spät,
                etwas zu ändern.”, “Ich kann doch nicht einfach alles
                hinwerfen.”, “Ich habe gar nicht die Voraussetzungen/bin nicht
                gut genug für XYZ”...
              </p>
              <p className="mb-3 md:mb-4">
                Vielleicht weißt du noch gar nicht, was du eigentlich möchtest.
                Geschweige denn; wer du bist. Du verlierst dich oft in der
                Außenwelt, hast keine oder kaum Verbindung zu dir selbst. Zu
                deiner Gefühlswelt, deinen Bedürfnissen, deiner Weiblichkeit.
                Und wieder: Unzufriedenheit, Frust, Erschöpfung, Überforderung -
                you name it.
              </p>
              <p className="mb-3 md:mb-4">
                Also ignorierst du weiter die Stimme aus deinem Herzen und
                änderst nichts. Ist ja der einfachste Weg. Aber ich sage dir:
              </p>
              <p className="mb-6 font-bold md:mb-8">
                Du verdienst ein erfülltes Leben mit mehr Leichtigkeit, tiefer
                Verbindung und innerem Frieden.
              </p>
            </div>
            <div className="relative flex flex-col justify-center">
              <div className="relative md:-bottom-4 z-20 md:min-w-[244px] min-h-[211px] min-w-full rounded-[14px] overflow-hidden">
                <Image
                  src={"/images/angebot_img1.webp"}
                  width={244}
                  height={211}
                  alt="you got this"
                  className="absolute object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="md:absolute md:block hidden md:-bottom-16 z-10 md:-left-16 md:min-w-[178px] min-h-[295px] min-w-full rounded-[14px] overflow-hidden">
                <Image
                  src={"/images/angebot_img2.webp"}
                  width={178}
                  height={295}
                  alt="bild mit journal"
                  className="absolute object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* stell dir vor section */}
      <section className="pb-16 md:pb-0 lg:px-8 bg-[#F4F4F4]">
        <div className="container md:max-w-[610px] w-full bg-[#D0D9D7] md:-top-32 md:p-16 p-4 pt-8 mx-auto rounded-[14px] relative">
          <div className="text-sm md:text-base">
            <h2
              style={sourceSerif.style}
              className="mb-4 text-3xl text-left md:mb-6 md:text-4xl"
            >
              Stell dir vor...
            </h2>
            <ul className="pl-4 list-disc">
              <li className="mb-1 md:mb-2">
                fühlst dich nicht mehr disconnected, sondern spürst eine tiefe{" "}
                <strong>Verbundenheit</strong> - zu dir als Frau
              </li>
              <li className="mb-1 md:mb-2">
                kommst raus aus dem Hamsterrad aus ständigem Frust & Erschöpfung
                und findest <strong>inneren Frieden</strong>
              </li>
              <li className="mb-1 md:mb-2">
                du verschwendest deine Zeit und Energie nicht mehr an
                Selbstzweifeln und Vergleichen
              </li>
              <li className="mb-1 md:mb-2">
                befreist dich von limitierenden Glaubenssätzen und der lähmenden
                Angst, Fehler zu machen oder falsche Entscheidungen zu treffen
              </li>
              <li className="mb-1 md:mb-2">
                du hast <strong>Vertrauen</strong> in dich und in deine
                Entscheidungen
              </li>
              <li className="mb-1 md:mb-2">
                du lernst <strong>gesunde Grenzen</strong> zu setzen
              </li>
              <li className="mb-1 md:mb-2">
                du führst entspannte und gesunde <strong>Beziehungen</strong>
              </li>
              <li className="mb-1 md:mb-2">
                du kommst nach ewiger Grübelei endlich ins Tun, machst den
                ersten Schritt und gehst für dich und deine Träume los
              </li>
              <li className="mb-1 md:mb-2">
                gehst deinen Weg <strong>selbstbestimmt</strong> unabhängig von
                den Erwartungen anderer
              </li>
              <li className="mb-1 md:mb-2">
                du spürst <strong>Erfüllung</strong> im hier & jetzt und freust
                dich auf alles, was kommt
              </li>
              <li className="mb-1 md:mb-2">
                du bist <strong>Inspiration</strong> für andere Frauen
              </li>
            </ul>
            <p className="pt-2 mx-auto text-lg text-center md:text-xl">
              ...genau dabei kann ich dir helfen. 🫶
            </p>
          </div>
        </div>
      </section>
      {/* small Banner */}
      <section className="py-3 md:py-4 bg-[#D0D9D7]">
        <p
          style={josefineSans.style}
          className="text-xs text-center text-white uppercase md:text-sm"
        >
          Sei die Frau, die mehr vom Leben will. Die den Mut hat Dinge zu ändern
          und für sich loszugehen. Sei die Inspiration für andere Frauen.
        </p>
      </section>
      {/* so kannst du mit mir zusammenarbeiten section */}
      <section id="offer" className="px-6 py-16 bg-white md:py-24 lg:px-8">
        <div className="container max-w-5xl mx-auto ">
          <h2
            style={sourceSerif.style}
            className="mb-3 text-3xl text-left md:mb-6 md:text-4xl"
          >
            So kannst du mit mir <em>zusammenarbeiten</em>
          </h2>
          <div className="flex flex-col justify-between gap-4 mt-8 md:gap-8 md:flex-row md:mt-16">
            {/* zusammenarbeiten card */}
            <div className="w-full">
              <div className="h-[220px] shadow-lg w-full relative flex justify-center items-center overflow-hidden rounded-[14px]">
                <div className="text-center mx-auto md:max-w-[250px] max-w-[220px] relative z-10  text-white">
                  <h2
                    style={sourceSerif.style}
                    className="pb-2 text-2xl font-bold md:text-3xl"
                  >
                    femaleConnect
                  </h2>
                  <p
                    className="text-xl italic font-light md:text-2xl"
                    style={sourceSerif.style}
                  >
                    <em>6-Wochen-Programm*</em>
                  </p>
                </div>
                <Image
                  src={"/images/angebot_feature-1.webp"}
                  width={290}
                  height={220}
                  alt="frau meditiert"
                  className="absolute top-0 bottom-0 left-0 right-0 object-cover min-w-full min-h-full"
                />
              </div>
              <div className="py-8">
                <p className="mb-4">
                  In meinem 6-Wochen 1:1 Coaching-Programm femaleConnect helfe
                  ich dir, die <strong>Verbindung</strong> zu dir als Frau
                  wieder herzustellen, deine <strong>Bedürfnisse</strong> zu
                  erkennen und sie zu achten. Komm aus dem reinen Funktionieren
                  raus und lass wieder mehr <strong>Leichtigkeit</strong> in
                  dein Leben.
                </p>

                <ul className="py-2 text-xs md:py-4 md:text-sm">
                  <li className="mb-2 md:mb-4">
                    ✨ verbinde dich mit deinem <strong>Zyklus</strong> und
                    lerne deine verschiedenen Energien kennen und nutzen
                  </li>
                  <li className="mb-2 md:mb-4">
                    ✨ lerne <strong>Grenzen</strong> zu setzen und für dich &
                    deine <strong>Bedürfnisse </strong>
                    einzustehen
                  </li>
                  <li className="mb-2 md:mb-4">
                    ✨ verabschiede dich von ständigem Frust & Erschöpfung und
                    finde <strong>inneren Frieden</strong>
                  </li>
                  <li className="mb-2 md:mb-4">
                    ✨ führe gesunde & harmonische <strong>Beziehungen</strong>
                  </li>
                  <li className="mb-2 md:mb-4">
                    ✨ finde eine <strong>Selfcare-Rountine</strong>, die zu dir
                    passt
                  </li>
                </ul>
                <ul className="py-2 text-xs md:py-4 md:text-sm">
                  <li className="mb-2 md:mb-4">
                    <strong>✓ 6-wöchige 1:1 Begleitung</strong>
                  </li>
                  <li className="mb-2 md:mb-4">
                    ✓ individuelle Themenschwerpunkte
                  </li>
                  <li className="mb-2 md:mb-4">
                    ✓ wöchentliche <strong>1:1 Calls </strong>(online)
                  </li>
                  <li className="mb-2 md:mb-4">
                    ✓ wöchentliche <strong>Workbooks </strong>inkl. Action Steps
                    für deinen Alltag
                  </li>
                  <li className="mb-2 md:mb-4">
                    ✓ WhatsApp <strong>Support</strong> zwischen den Calls + 7
                    Tage nach Abschluss des Programms
                  </li>
                </ul>
                <p>Dein Investment: 299 Euro**</p>
                <p className="text-xs">
                  (Preis gilt nur für kurze Zeit, regulär 599 Euro)
                </p>
                <div className="pt-6 md:pt-8">
                  <Link
                    className={`relative z-20 duration-300 rounded-[14px] transition-colors focus:outline-none focus:ring-2 focus:ring-white/10 focus:ring-offset-2  border-[1px] border-solid border-f-brown cursor-pointer px-5 py-2 text-sm text-white bg-f-brown hover:text-f-brown font-medium  hover:bg-white`}
                    href={
                      "https://calendly.com/femlove/kostenloses-erstgespraech"
                    }
                    aria-label="anmeldung zum kennenlerngespräch"
                  >
                    Kennenlerngespräch vereinbaren
                  </Link>
                </div>
              </div>
            </div>
            {/* zusammenarbeiten card */}
            <div className="w-full">
              <div className="h-[220px] shadow-lg w-full relative flex justify-center items-center overflow-hidden rounded-[14px]">
                <div className="text-center mx-auto md:max-w-[250px] max-w-[220px] relative z-10  text-white">
                  <h2
                    style={sourceSerif.style}
                    className="pb-2 text-2xl font-bold md:text-3xl"
                  >
                    breakBarriers
                  </h2>
                  <p
                    className="text-xl italic font-light md:text-2xl"
                    style={sourceSerif.style}
                  >
                    <em>8-Wochen-Programm*</em>
                  </p>
                </div>
                <Image
                  src={"/images/angebot_feature-2.webp"}
                  width={290}
                  height={220}
                  alt="Hand mit ring"
                  className="absolute top-0 bottom-0 left-0 right-0 object-cover min-w-full min-h-full"
                />
              </div>
              <div className="py-8">
                <p className="mb-4">
                  In meinem 8-Wochen 1:1 Coaching-Programm breakBarriers helfe
                  ich dir dabei dich von
                  <strong> Ängsten, Blockaden und Glaubenssätzen </strong>
                  zu lösen und endlich für dich loszugehen.
                </p>
                <ul className="py-2 text-xs md:py-4 md:text-sm">
                  <li className="mb-2 md:mb-4">
                    ✨ <strong>befreie dich von der lähmenden Angst</strong>,
                    Fehler zu machen oder falsche Entscheidungen zu treffen
                  </li>
                  <li className="mb-2 md:mb-4">
                    ✨ sag tschüss zu{" "}
                    <strong>limitierenden Glaubenssätzen</strong>
                  </li>
                  <li className="mb-2 md:mb-4">
                    ✨ baue mehr <strong>Selbstvertrauen</strong> und
                    Bewusstsein auf
                  </li>
                  <li className="mb-2 md:mb-4">
                    ✨ <strong>komm ins Tun:</strong> Mach endlich den ersten
                    Schritt und geh für dich und deine Träume los
                  </li>
                  <li className="mb-2 md:mb-4">
                    ✨ geh deinen Weg <strong>selbstbestimmt</strong> und löse
                    dich von den Erwartungen anderer
                  </li>
                  <li className="mb-2 md:mb-4">
                    ✨ finde <strong>Erfüllung</strong> in deiner persönlichen
                    Journey
                  </li>
                </ul>
                <ul className="py-2 text-xs md:py-4 md:text-sm">
                  <li className="mb-2 md:mb-4">
                    <strong>✓ 8-wöchige 1:1 Begleitung</strong>
                  </li>
                  <li className="mb-2 md:mb-4">
                    ✓ individuelle Themenschwerpunkte
                  </li>
                  <li className="mb-2 md:mb-4">
                    ✓ wöchentliche <strong>1:1 Calls</strong> (online)
                  </li>
                  <li className="mb-2 md:mb-4">
                    ✓ wöchentliche <strong>Workbooks</strong> inkl. Action Steps
                    für deinen Alltag
                  </li>
                  <li className="mb-2 md:mb-4">
                    ✓ WhatsApp <strong>Support</strong> zwischen den Calls + 14
                    Tage nach Abschluss des Programms
                  </li>
                </ul>
                <p>Dein Investment: 449 Euro**</p>
                <p className="text-xs">
                  (Preis gilt nur für kurze Zeit, regulär 719 Euro)
                </p>
                <div className="pt-6 md:pt-8">
                  <Link
                    className={`relative z-20 duration-300 rounded-[14px] transition-colors focus:outline-none focus:ring-2 focus:ring-white/10 focus:ring-offset-2  border-[1px] border-solid border-f-brown cursor-pointer px-5 py-2 text-sm text-white bg-f-brown hover:text-f-brown font-medium  hover:bg-white`}
                    href={
                      "https://calendly.com/femlove/kostenloses-erstgespraech"
                    }
                    aria-label="anmeldung zum kennenlerngespräch"
                  >
                    Kennenlerngespräch vereinbaren
                  </Link>
                </div>
              </div>
            </div>
            {/* zusammenarbeiten card */}
            <div className="w-full">
              <div className="h-[220px] shadow-lg w-full relative flex justify-center items-center overflow-hidden rounded-[14px]">
                <div className="text-center mx-auto md:max-w-[250px] max-w-[220px] relative z-10  text-white">
                  <h2
                    style={sourceSerif.style}
                    className="pb-2 text-2xl font-bold md:text-3xl"
                  >
                    Individuelles Angebot
                  </h2>
                </div>
                <Image
                  src={"/images/angebot_feature-3.webp"}
                  width={290}
                  height={220}
                  alt="grass auf sand"
                  className="absolute top-0 bottom-0 left-0 right-0 object-cover min-w-full min-h-full"
                />
              </div>
              <div className="py-8">
                <p className="mb-3 md:mb-4">
                  Du findest dich in meinen Programmangeboten nicht wieder,
                  möchtest aber mit mir zusammenarbeiten?
                </p>
                <p className="mb-3 md:mb-4">
                  Gerne unterbreite ich dir ein individuelles Angebot - sei es
                  für eine <strong>Einzelsession</strong> oder eine{" "}
                  <strong>langfristige Zusammenarbeit</strong>
                </p>
                <p>Mögliche Themen dafür könnten z.B. sein:</p>
                <ul className="py-2 pl-4 text-xs list-disc md:py-4 md:text-sm">
                  <li className="mb-1">Persönlicher “Wake-Up” Call</li>
                  <li className="mb-1">Selbstvertrauen stärken</li>
                  <li className="mb-1">
                    Zyklusbewusstsein in den Alltag integrieren
                  </li>
                  <li className="mb-1">Gewohnheiten aufbauen</li>
                  <li className="mb-1">
                    Begleitung im Prozess der Akzeptanz & des Loslassens
                  </li>
                  <li className="mb-1">Selbstakzeptanz</li>
                  <li className="mb-1">Selbstliebe und Selbstfürsorge</li>
                  <li className="mb-1">Potenzialentfaltung</li>
                  <li className="mb-1">Balance & innere Ruhe</li>
                  <li className="mb-1">Selbstfindung & Identitätsfindung</li>
                  <li className="mb-1">Persönliche Weiterentwicklung</li>
                  <li className="mb-1">Mindset-Coaching</li>
                </ul>
                <p>
                  Vereinbare am besten ein kostenloses Kennenlerngespräch und
                  wir schauen gemeinsam, ob und wie ich dich bei deiner
                  aktuellen Herausforderungen unterstützen kann.
                </p>
                <div className="pt-6 md:pt-8">
                  <Link
                    className={`relative z-20 duration-300 rounded-[14px] transition-colors focus:outline-none focus:ring-2 focus:ring-white/10 focus:ring-offset-2  border-[1px] border-solid border-f-brown cursor-pointer px-5 py-2 text-sm text-white bg-f-brown hover:text-f-brown font-medium  hover:bg-white`}
                    href={
                      "https://calendly.com/femlove/kostenloses-erstgespraech"
                    }
                    aria-label="anmeldung zum kennenlerngespräch"
                  >
                    Kennenlerngespräch vereinbaren
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-4 text-xs">
            <p>*Programmverlängerung je nach Bedarf möglich </p>
            <p>**Ratenzahlung möglich.</p>
          </div>
        </div>
      </section>
      {/* cta 1 section */}
      <section className="px-6 py-16 bg-[#F4F4F4] md:pt-24 md:pb-36 lg:px-8">
        <div className="container max-w-5xl mx-auto ">
          <div className="flex flex-col justify-between gap-8 md:gap-16 md:flex-row">
            <div className="max-w-[650px] text-sm md:text-base">
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
                Lass uns daran arbeiten. Für deine Reise zu dir selbst. Für
                deine Träume. Entdecke deine Leidenschaften, deine Stärken, löse
                dich von deinen Ängsten und Blockaden und erschaffe dir ein
                Leben, in dem du Erfüllung, Leichtigkeit und tiefe Verbundenheit
                spürst.
              </p>
              <p className="mb-3 md:mb-4">Denn genau das verdienst du. 🫶</p>
              <p className="mb-3 md:mb-4">
                Lass uns doch einfach erstmal ganz unverbindlich in einem
                kostenlosen Kennenlerncall austauschen. Buch dir hier direkt
                einen Termin für das Kennenlerngespräch 👇
              </p>
              <div className="pt-3 md:pt-4">
                <Link
                  className={`relative z-20 duration-300 rounded-[14px] transition-colors focus:outline-none focus:ring-2 focus:ring-white/10 focus:ring-offset-2  border-[1px] border-solid border-f-brown cursor-pointer px-5 py-2 text-sm text-white bg-f-brown hover:text-f-brown font-medium  hover:bg-white`}
                  href={
                    "https://calendly.com/femlove/kostenloses-erstgespraech"
                  }
                  aria-label="anmeldung zum kennenlerngespräch"
                >
                  Kennenlerngespräch vereinbaren
                </Link>
              </div>
            </div>
            <div className="relative flex flex-col justify-center">
              <div
                className="absolute top-0 md:-right-12 -right-2 rotate-[20deg] md:text-2xl text-lg"
                style={sourceSerif.style}
              >
                <em>Let’s do this 🔥</em>
              </div>
              <div>
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
        </div>
      </section>
      {/* faq section */}
      <section className="py-16 md:py-32 lg:px-8">
        <div className="container md:max-w-[949px] w-full bg-[#D0D9D7] md:p-16 p-4 pt-8 mx-auto rounded-[14px] relative">
          <div className="text-sm md:text-base">
            <h2
              style={sourceSerif.style}
              className="mb-4 text-3xl text-center md:mb-6 md:text-4xl"
            >
              FAQ
            </h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-900">
                          <span className="text-base font-semibold leading-7">
                            {faq.question}
                          </span>
                          <span className="flex items-center ml-6 h-7">
                            {open ? (
                              <MinusSmallIcon
                                className="w-6 h-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmallIcon
                                className="w-6 h-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="pr-12 mt-2">
                        <p className="text-base leading-7 text-gray-600">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </section>
      {/* cta 2 section */}
      <InTouch />
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
