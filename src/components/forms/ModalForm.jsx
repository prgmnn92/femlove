import { useEffect, useState } from "react";

import Button from "../Button";
import { josefineSans, sourceSerif } from "@/fonts";

export default function ModalForm() {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    let modalTimeout = setTimeout(() => {
      setVisible(true);
    }, 5000);
    return () => {
      clearTimeout(modalTimeout);
    };
  }, []);
  return (
    <div
      id="portal"
      className={`fixed flex bottom-0 left-0 right-0  items-center justify-center  transition-all duration-500 ${
        isVisible
          ? "top-0 opacity-1 z-[999999]"
          : "top-[100vh] opacity-0 z-[-1]"
      } `}
    >
      <div
        className={`absolute top-0 bottom-0 left-0 right-0 bg-f-pink/60 transition-all delay-300
        ${isVisible ? "bg-[#F4F4F4]/40 backdrop-blur" : "bg-transparent"}`}
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
      <div className="relative px-6 py-24 overflow-hidden shadow-2xl bg-[#D0D9D7] isolate sm:rounded-[14px] sm:px-24 xl:py-32">
        <div
          className="absolute p-2 cursor-pointer top-8 right-8 lg:top-4 lg:right-4"
          onClick={() => setVisible(false)}
        >
          <CloseIcon />
        </div>
        <p
          style={josefineSans.style}
          className="text-xs font-light text-center uppercase lg:text-sm"
        >
          Neu
        </p>
        <div className="w-8 h-[1px] bg-black/40 mx-auto my-4 rounded"></div>
        <h2
          style={sourceSerif.style}
          className="max-w-2xl pb-8 mx-auto text-3xl font-light tracking-tight text-center text-black sm:text-4xl"
        >
          Der wöchentliche Femlove-Newsletter
        </h2>
        <p className="mx-auto mt-2 leading-8 text-center text-gray-600 ">
          ✦ jeden Dienstag erhältst du alltagstaugliche Tipps, Impulse oder
          Action Steps für ein zyklusbewusstes, gesundes & erfülltes Leben
        </p>
        <p className="max-w-xl mx-auto mt-2 leading-8 text-center text-gray-600">
          ✦ all&apos;bout Zyklusbewusstsein, Selbstverwirklichung, Gesundheit &
          Wohlbefinden
        </p>
        <p className="max-w-xl mx-auto mt-2 leading-8 text-center text-gray-600">
          ✦ kurz & knackig ohne viel Chichi
        </p>
        <p className="max-w-xl mx-auto mt-2 leading-8 text-center text-gray-600">
          Melde dich hier für den Femlove-Newsletter an:
        </p>
        {showThankYou ? (
          <div className="pt-4 text-lg font-bold text-black">
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
            <Button title={"Abonnieren"} type="submit" />
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
      fill="black"
    />
  </svg>
);
