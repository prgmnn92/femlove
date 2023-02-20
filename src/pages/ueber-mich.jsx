/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import HeadingH1 from "@/components/headings/HeadingH1";
import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";

const ÜberMich = () => {
  return (
    <Layout>
      <section>
        <Container className="px-4 py-8 lg:py-16">
          <h1 className="max-w-md mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl text-center mx-auto py-16"></h1>
          <HeadingH1>Hi! Ich bin Franzi.</HeadingH1>
        </Container>
      </section>
      <section>
        <Container className="flex flex-wrap pb-8">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 overflow-hidden pb-8 lg:text-lg">
            <Image
              alt="feature"
              className="object-cover object-center h-full w-full"
              src="/images/femlove_me.webp"
              width={500}
              height={700}
            />
          </div>
          <div className="flex flex-col flex-wrap mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <p className="font-semibold pb-3">
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
            <p className="font-semibold pb-3 pt-9">
              Warum habe ich Femlove ins Leben gerufen?
            </p>
            <p className="pb-6">
              Vielleicht geht es dir gerade wie mir vor knapp 3 Jahren. Pille
              abgesetzt, mit Erschrecken festgestellt, dass ich bei NULL stehe -
              zumindest was meinen Zyklus angeht.
            </p>
            <p>
              Denn: Nach 10 Jahren Pilleneinnahme hatte ich 0 Ahnung und 0
              Bewusstsein für meinen Zyklus, war maximal überfordert und wusste
              gar nicht wo ich anfangen soll. Dazu kamen Schmerzen, die ich
              durch die Pille natürlich nicht kannte; dachte es wäre normal →
              Spoiler: Ist es nicht.
            </p>
          </div>
        </Container>
        <Container className="flex flex-wrap">
          <div className="flex flex-col flex-wrap mb-10 lg:w-1/2  lg:text-left text-center">
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
            <p className="pb-6">
              Ja, auch du verdienst es, genau dieses Bewusstsein zu erfahren. 🙌
              On top lernst du, dich selbst zu akzeptieren, achtsam mit deinem
              Körper umzugehen und ihm zu geben was er braucht. ✨
            </p>
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
          </div>
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 overflow-hidden lg:pl-12 pb-8 lg:text-lg">
            <Image
              alt="feature"
              className="object-cover object-center h-full w-full"
              src="/images/femlove_me.webp"
              width={500}
              height={700}
            />
          </div>
        </Container>
      </section>
      <section>
        <Container className="max-w-4xl">
          <h2 className="max-w-md mb-4 text-2xl tracking-tight leading-none md:text-3xl xl:text-4xl text-center mx-auto py-8">
            Finde deinen Weg zu einem gesunden Zyklus- und Körperbewusstsein
          </h2>
          <div className="flex">
            <div className="lg:w-1/3 w-full">image</div>
            <div className="lg:w-2/3 w-full">
              <p className="font-semibold pb-3 pt-9">Zyklus</p>
              <p className="pb-6">
                Der weibliche Zyklus macht dich aus - als Frau.
              </p>
              <p className="pb-6">
                Leider wird der Zyklus recht stiefmütterlich behandelt: Frau hat
                halt ein Mal im Monat "ihre Tage" und die sind einfach nur
                nervig und schmerzhaft. Außerdem wird ohnehin nicht gerne über
                dieses "Thema" gesprochen; in unserer Gesellschaft ist es nach
                wie vor mehr Tabu als Normal.
              </p>
              <p className="pb-6">
                Das führt dazu, dass viele Frauen einfach nicht wissen, was über
                die Zeit in ihrem Körper eigentlich stattfindet - welche Phasen
                sie im Zyklus durchlaufen, wie ihre Hormone das Ganze steuern
                und wie die Phasen sogar genutzt werden können.
              </p>
              <p className="pb-6">
                Das Problem liegt aus meiner Sicht vor allem darin, dass selbst
                in der Schulzeit VIEL zu WENIG über das weibliche Geschlecht
                sowie die Hormone und die Abläufe im Körper der Frau aufgeklärt
                wird.
              </p>
              <p className="pb-6">
                Dabei ist das Wissen rund um den weiblichen Zyklus unerlässlich,
                um ein gesundes und ausgeglichenes Leben zu führen.
              </p>
              <p className="pb-6">
                Also liegt es letztlich an dir, dass du den Mut hast, dich mit
                DIR zu beschäftigen. Lerne dich und deinen Zyklus kennen, nimm
                einzelne Phasen bewusst wahr und erlange damit ein
                Zyklusbewusstsein, das dich (besser: dein Selbstbild &
                Körpergefühl) bereichern wird!
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="lg:w-1/3 w-full">image</div>
            <div className="lg:w-2/3 w-full">
              <p className="font-semibold pb-3 pt-9">Gesundheit</p>
              <p className="pb-6">
                Der weibliche Zyklus hat einen sehr großen Einfluss auf die
                Gesundheit und das Wohlbefinden der Frau. Dein Lebensstil hat
                demnach ebenfalls einen Einfluss auf deinen Zyklus - positiv wie
                negativ.
              </p>
              <p className="pb-6">
                Das Thema Gesundheit ist also unverzichtbar, wenn es um den
                Zyklus und die Zyklusgesundheit geht.
              </p>
              <p className="pb-6">
                Eine ganzheitliche Zyklusgesundheit kann also gezielt angegangen
                werden, wenn du weißt, wie du deinen Körper während der
                einzelnen Zyklusphasen optimal unterstützen kannst - so hat
                bspw. die Ernährung einen großen Einfluss auf deine Hormon- und
                Zyklusgesundheit.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="lg:w-1/3 w-full">image</div>
            <div className="lg:w-2/3 w-full">
              <p className="font-semibold pb-3 pt-9">
                Selbstakzeptanz & Selbstliebe
              </p>
              <p className="pb-6">
                Mein Ziel ist es, dass du ein gesundes Zyklusbewusstsein
                aufbaust und davon auch in Bezug auf eine gesteigerte
                Selbstakzeptanz und mehr Selbstliebe profitieren kannst.
              </p>
              <p className="pb-6">
                Ein gesundes Zyklusbewusstsein hilft dir, eine Art Verbundenheit
                mit dir und deinem Körper herzustellen. Du lernst dich besser
                kennen, kannst die verschiedenen Energien der einzelnen Phasen
                akzeptieren und sie gekonnt nutzen.
              </p>
              <p className="pb-6">
                Du wirst mit der Zeit eine tiefere Verbindung zu dir erfahren,
                dich selbst besser annehmen und eine Intuition aufbauen, die
                dich durch den Zyklus leitet.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <CTA />
    </Layout>
  );
};

export default ÜberMich;
