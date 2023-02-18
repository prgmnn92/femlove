import React from "react";
import Button from "./Button";
import Container from "./Container";
import Input from "./Input";

const CTA = () => {
  return (
    <section className="text-gray-600 body-font">
      <Container className="px-5 py-24">
        <div className="flex flex-col text-center w-full mb-12">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Femlove Newsletter
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Tipps & News direkt in deinem Postfach.
          </p>
        </div>
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div className="relative flex-grow w-full">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <Input type="email" id="email" name="email" />
          </div>
          <Button className="text-white bg-f-green border-0 py-2 px-8 focus:outline-none hover:bg-f-pink rounded text-lg">
            Abonnieren
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
