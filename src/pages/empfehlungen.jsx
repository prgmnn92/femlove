import Container from "@/components/Container";
import CTA from "@/components/CTA";
import HeadingH1 from "@/components/headings/HeadingH1";
import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

const EmpfehlungsCard = ({ title, children }) => {
  return (
    <div className="flex flex-wrap w-full p-6 mb-8 bg-white shadow lg:p-8">
      <div className="w-full pb-6 lg:w-1/3">
        <h2 className="text-2xl lg:text-4xl">{title}</h2>
      </div>
      <div className="w-full lg:w-2/3 lg:pl-4">{children}</div>
    </div>
  );
};

const Empfehlungen = () => {
  return (
    <Layout>
      <section>
        <Container className="px-4 py-8 lg:py-12">
          <HeadingH1>Meine Empfehlungen</HeadingH1>
          <EmpfehlungsCard title={"NFP mit trackle"}>
            <p className="pb-3">
              Mit diesem Link erhältst du 10 % Rabatt auf deine
              trackle-Bestellung:
            </p>
            <Link
              href={
                "https://trackle.de/?ref=KeP3o2o6Tmeojj&utm_source=affiliate"
              }
              className="mb-3 underline"
            >
              LINK zu trackle
            </Link>
            <p className="py-3">
              Alternativ kannst du den Rabatt-Code <b>FEMLOVE10</b> verwenden
            </p>
            <p className="pb-3">
              <Link
                className="underline"
                href="/post/erfahrungsbericht-trackle"
              >
                Mein Erfahrungsbericht
              </Link>
            </p>
          </EmpfehlungsCard>
          <EmpfehlungsCard title={"Supplements"}>
            <ul>
              <li className="py-1 underline">
                <Link href={"https://amzn.to/3E1MENs"} target="_blank">
                  Eisentabletten (Achtung: schmecken nach Eisen)
                </Link>
              </li>
              <li className="py-1 underline">
                <Link href={"https://amzn.to/3lxJ1Za"} target="_blank">
                  Alternativ Eisenkapseln geschmacksneutral
                </Link>
              </li>
              <li className="py-1 underline">
                <Link href={"https://amzn.to/3xcdaQu"} target="_blank">
                  Vitamin B Komplex Forte
                </Link>
              </li>
              <li className="py-1 underline">
                <Link href={"https://amzn.to/3DVxDN5"} target="_blank">
                  Magnesium
                </Link>
              </li>
              <li className="py-1 underline">
                <Link
                  href={
                    "/post/wie-du-eisenmangel-erkennst-was-du-dagegen-tun-kannst"
                  }
                >
                  Mein Beitrag zum Thema Eisenmangel
                </Link>
              </li>
              <li className="py-1 underline">
                <Link href={"/post/magnesium-bedeutung-zyklus"}>
                  Mein Beitrag über Magnesium
                </Link>
              </li>
            </ul>
          </EmpfehlungsCard>
          <EmpfehlungsCard title={"Bücher"}>
            <ul>
              <li className="py-1 underline">
                <Link href={"https://amzn.to/40Lg4JB"} target="_blank">
                  Unsichtbare Frauen von Caroline Criado-Perez
                </Link>
              </li>
              <li className="py-1 underline">
                <Link href={"https://amzn.to/3XqmFWZ"} target="_blank">
                  Vagina: Eine Geschichte der Weiblichkeit von Naomi Wolf
                </Link>
              </li>
              <li className="py-1 underline">
                <Link href={"https://amzn.to/3JUrzZg"} target="_blank">
                  Wahrheit oder Pflicht von Lena Kupke
                </Link>
              </li>
              <li className="py-1 underline">
                <Link href={"https://amzn.to/3YoRHj8"} target="_blank">
                  Hey Hirn von Dr. Leon Windscheid
                </Link>
              </li>
              <li className="py-1 underline">
                <Link href={"https://amzn.to/3lroYMi"} target="_blank">
                  Besser fühlen: Eine Reise zur Gelassenheit von Dr. Leon
                  Windscheid
                </Link>
              </li>
              <li className="py-1 underline">
                <Link href={"https://amzn.to/3lrp2M2"} target="_blank">
                  Die schönen Dinge siehst du nur, wenn du langsam gehst von
                  Haemin Sunim
                </Link>
              </li>
              <li className="py-1 underline">
                <Link href={"https://amzn.to/3RYdQTi"} target="_blank">
                  101 Essays, die dein Leben verändern werden von Brianna Wiest
                </Link>
              </li>
              <li className="py-1 underline">
                <Link href={"https://amzn.to/3Ii9DGw"} target="_blank">
                  Ikigai von Taro Inami
                </Link>
              </li>
            </ul>
          </EmpfehlungsCard>
        </Container>
      </section>
      <CTA />
    </Layout>
  );
};

export default Empfehlungen;
