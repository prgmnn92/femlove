import React from "react";

// import Button from "./Button";
import Image from "next/image";

import Button from "./Button";

const CTA = () => {
  return (
    <div className="relative py-16 overflow-hidden isolate sm:py-24 lg:py-32">
      <div className="px-6 py-8 mx-auto lg:px-12 max-w-7xl bg-f-green rounded-b-3xl rounded-tl-3xl">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl py-6 lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Abonniere meinen Newsletter
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-200">
              Erfahre regelmäßig Neues rund um das Thema Gesundheit und erhalte
              wertvolle Ratschläge für dein Wohlbefinden - melde dich jetzt für
              meinen Newsletter an!
            </p>
            <form
              name="cta-form"
              method="post"
              action="/"
              data-netlify="true"
              className="flex max-w-md mt-6 gap-x-4"
            >
              <input type="hidden" name="form-name" value="cta-form" />˚
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="lg:min-w-[230px] min-h-[42px] flex-auto rounded-md border-2 border-none bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 placeholder-black/40"
                placeholder="Deine email"
              />
              <Button type="submit">Abonnieren</Button>
            </form>
          </div>
          <div className="text-white">
            <Image
              className="object-cover max-h-72 rounded-b-3xl rounded-tl-3xl"
              src="/images/cta_image.webp"
              width={600}
              height={300}
              alt="call to action image"
            />
          </div>
        </div>
      </div>
    </div>
    // <section>
    //   <Container className="px-5 pt-24 pb-12">
    //     <div className="flex flex-col w-full mb-12 text-center">
    //       <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-4xl title-font">
    //         Femlove Newsletter
    //       </h2>
    //       <p className="mx-auto text-base leading-relaxed lg:w-2/3">
    //         Tipps & News direkt in deinem Postfach.
    //       </p>
    //     </div>
    //     <div className="flex flex-col w-full px-8 mx-auto space-y-4 lg:w-2/3 sm:space-y-0 sm:px-0">
    //       <CTAForm />
    //     </div>
    //   </Container>
    // </section>
  );
};

export default CTA;
