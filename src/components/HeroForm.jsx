import React from "react";

import Button from "./Button";

const HeroForm = () => {
  return (
    <form
      name="hero-form"
      method="post"
      action="/"
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
        required
        className="min-w-[230px] flex-auto rounded-md border-2 border-black/5 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-f-red sm:text-sm sm:leading-6"
        placeholder="Email"
      />
      <Button type="submit">Abonnieren</Button>
    </form>
  );
};

export default HeroForm;
