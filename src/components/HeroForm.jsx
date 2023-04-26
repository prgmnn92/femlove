import React, { useState } from "react";

import Button from "./Button";

const HeroForm = () => {
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
  return showThankYou ? (
    <div className="pt-4 text-lg font-bold ">
      Vielen Dank für deine Anmeldung, du erhälst in kürze eine
      Bestätigungsmail.
    </div>
  ) : (
    <form
      name="hero-form"
      method="post"
      // action="/"
      onSubmit={handleSubmit}
      data-netlify="true"
      className="flex max-w-md mt-6 gap-x-4"
    >
      <input type="hidden" name="form-name" value="hero-form" />
      <label htmlFor="email-address" className="sr-only">
        Email Adresse
      </label>
      <input
        id="email-address"
        name="email"
        type="email"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="min-w-[230px] flex-auto rounded-md border-2 border-black/5 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-f-red sm:text-sm sm:leading-6"
        placeholder="E-Mail"
      />
      <Button type="submit">Abonnieren</Button>
    </form>
  );
};

export default HeroForm;
