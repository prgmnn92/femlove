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
      className={`fixed  top-0 bottom-0 left-0 right-0  items-center justify-center z-[999999] transition-all ${
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
        <div
          className="absolute p-2 cursor-pointer top-8 right-8 lg:top-4 lg:right-4"
          onClick={() => setVisible(false)}
        >
          <CloseIcon />
        </div>
        <h2 className="max-w-2xl mx-auto text-3xl font-bold tracking-tight text-center text-white sm:text-4xl">
          Bleib auf dem Laufenden!
        </h2>
        <p className="max-w-xl mx-auto mt-2 text-lg leading-8 text-center text-gray-300">
          Bleib immer up-to-date und werde Teil meiner Femlove-Community, um
          exklusive Tipps für einen gesunden und zyklusbewussten Lebensstil zu
          erhalten. 🔥
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

const CloseIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 10.9163L2.29278 17.6236C2.04182 17.8745 1.72243 18 1.3346 18C0.946768 18 0.627376 17.8745 0.376425 17.6236C0.125475 17.3726 0 17.0532 0 16.6654C0 16.2776 0.125475 15.9582 0.376425 15.7072L7.08365 9L0.376425 2.29278C0.125475 2.04182 0 1.72243 0 1.3346C0 0.946768 0.125475 0.627376 0.376425 0.376425C0.627376 0.125475 0.946768 0 1.3346 0C1.72243 0 2.04182 0.125475 2.29278 0.376425L9 7.08365L15.7072 0.376425C15.9582 0.125475 16.2776 0 16.6654 0C17.0532 0 17.3726 0.125475 17.6236 0.376425C17.8745 0.627376 18 0.946768 18 1.3346C18 1.72243 17.8745 2.04182 17.6236 2.29278L10.9163 9L17.6236 15.7072C17.8745 15.9582 18 16.2776 18 16.6654C18 17.0532 17.8745 17.3726 17.6236 17.6236C17.3726 17.8745 17.0532 18 16.6654 18C16.2776 18 15.9582 17.8745 15.7072 17.6236L9 10.9163Z"
      fill="white"
    />
  </svg>
);
