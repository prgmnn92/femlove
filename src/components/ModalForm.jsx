import { useEffect, useState } from "react";

import Button from "./Button";

export default function ModalForm() {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    let modalTimeout = setTimeout(() => {
      setVisible(true);
    }, 8000);
    return () => {
      clearTimeout(modalTimeout);
    };
  }, []);
  return (
    <div
      id="portal"
      className={`fixed  top-0 bottom-0 left-0 right-0  items-center justify-center z-[9999] transition-all ${
        isVisible ? "flex opacity-1" : "hidden opacity-0"
      } `}
    >
      <div
        className="absolute top-0 bottom-0 left-0 right-0 bg-f-pink/60"
        onClick={() => setVisible(false)}
      />
      <NewsletterSignUp setVisible={setVisible} />
    </div>
  );
}

function NewsletterSignUp({ setVisible }) {
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
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="relative px-6 py-24 overflow-hidden shadow-2xl bg-f-green isolate sm:rounded-3xl sm:px-24 xl:py-32">
        <h2 className="max-w-2xl mx-auto text-3xl font-bold tracking-tight text-center text-white sm:text-4xl">
          Bleib auf dem Laufenden!
        </h2>
        <p className="max-w-xl mx-auto mt-2 text-lg leading-8 text-center text-gray-300">
          Erfahre regelmäßig Neues rund um das Thema Gesundheit und erhalte
          wertvolle Ratschläge für dein Wohlbefinden - melde dich jetzt für
          meinen Newsletter an!
        </p>
        {showThankYou ? (
          <div className="pt-4 text-lg font-bold text-white">
            Vielen Dank für deine Anmeldung, du erhälst in kürze eine
            Bestätigungsmail.
          </div>
        ) : (
          <form
            name="popup-form"
            method="post"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="flex max-w-md mx-auto mt-10 gap-x-4"
          >
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
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient
              id="759c1415-0410-454c-8f7c-9a820de03641"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(512 512) rotate(90) scale(512)"
            >
              <stop stopColor="white" />
              <stop offset={1} stopColor="white" stopOpacity={0} />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
