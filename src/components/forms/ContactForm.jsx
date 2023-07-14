import React from "react";

import Button from "../Button";

function ContactForm() {
  return (
    <div className="relative bg-white isolate">
      <div className="grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2">
        <div className="relative px-6 pt-24 pb-10 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="max-w-xl mx-auto lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 z-10 w-full overflow-hidden lg:w-1/2"></div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Du hast Fragen oder willst einfach nur etwas los werden?
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Dann schreibe mir eine Nachricht. Ich werde dir so schnell wie
              möglich Antworten. Ich freue mich auf deine Nachricht. 🫶
            </p>
          </div>
        </div>
        <form
          action="/"
          method="post"
          data-netlify="true"
          name="contact-page-form"
          className="px-6 pt-5 pb-24 md:pt-20 sm:pb-32 lg:px-8 lg:py-48"
        >
          <input type="hidden" name="form-name" value="contact-page-form" />
          <div className="max-w-xl mx-auto lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Vorname
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-f-red sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Nachname
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-f-red sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  E-Mail
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-f-red sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Nachricht
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-f-red sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-8">
              <Button type="submit">Sende Nachricht</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
