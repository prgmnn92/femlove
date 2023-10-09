import React, { useState } from "react";

import Image from "next/image";

import Button from "../Button";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      email: email,
      api_key: "JVGfDl8rhk70dJos3_p8dA",
    };

    fetch("https://api.convertkit.com/v3/forms/5015124/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setEmail("");
    setShowThankYou(true);
  };
  return (
    <div className="relative py-16 overflow-hidden isolate sm:py-24 lg:py-32">
      <div className="px-6 py-8 mx-auto lg:px-12 max-w-7xl bg-f-green rounded-b-3xl rounded-tl-3xl">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl py-6 lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Abonniere meinen Newsletter
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-200">
              Und werde Teil meiner Femlove-Community, um exklusive Tipps für
              einen gesunden und zyklusbewussten Lebensstil zu erhalten und
              nichts mehr zu verpassen. 🔥
            </p>
            {showThankYou ? (
              <div className="pt-4 text-lg font-bold text-white">
                Vielen Dank für deine Anmeldung, du erhälst in kürze eine
                Bestätigungsmail.
              </div>
            ) : (
              <form
                name="cta-form"
                method="post"
                // action="/"
                onSubmit={handleSubmit}
                data-netlify="true"
                className="flex flex-col max-w-md mt-6 lg:flex-row gap-x-4"
              >
                <input type="hidden" name="form-name" value="cta-form" />
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  className="lg:min-w-[230px] lg:mb-0 mb-2 min-h-[42px] flex-auto rounded-md border-2 border-none bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 placeholder-black/40"
                  placeholder="Deine E-Mail"
                />
                <Button type="submit">Abonnieren</Button>
              </form>
            )}
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
  );
};

export default CTA;
