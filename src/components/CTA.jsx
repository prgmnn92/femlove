import React, { useState } from "react";

import { motion } from "framer-motion";

import Button from "./Button";
import Container from "./Container";
import Input from "./Input";
import ThankYou from "./ThankYou";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const newsletterHandler = (e) => {
    console.log(e.target.name);
    if (e.target.name == "email") setEmail(e.target.value);
    if (e.target.name == "name") setName(e.target.value);
  };
  const handleSubmit = () => {
    handleCreateNewsletter(email, name);
    setEmail("");
    setName("");
  };

  const handleCreateNewsletter = async (email) => {
    try {
      const response = await fetch("/api/createNewsletterEntry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name,
        }),
      });

      const newsletterEntry = await response.json();
      console.log(newsletterEntry);
      setNewsletterSubmitted(true);
    } catch (error) {
      console.log("Error creating appointment", error);
    }
  };
  return (
    <section>
      <Container className="px-5 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.15 }}
          className="flex flex-col w-full mb-12 text-center"
        >
          <h2 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
            Femlove Newsletter
          </h2>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Tipps & News direkt in deinem Postfach.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.25 }}
          className="flex flex-col w-full px-8 mx-auto space-y-4 lg:w-2/3 sm:space-y-0 sm:px-0"
        >
          {newsletterSubmitted ? (
            <ThankYou isNewsletter={true} />
          ) : (
            <>
              <div className="relative flex-grow w-full">
                <label
                  htmlFor="name"
                  className="text-sm font-medium leading-7 text-gray-600"
                >
                  Vorname
                </label>
                <Input
                  type="text"
                  id="name-cta"
                  name="name"
                  onChange={newsletterHandler}
                  value={name}
                />
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-7 text-gray-600"
                >
                  Email
                </label>
                <Input
                  type="email"
                  id="email-cta"
                  name="email"
                  onChange={newsletterHandler}
                  value={email}
                />
              </div>
              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full text-lg text-white border-0 rounded md:w-auto bg-f-main focus:outline-none"
                  onClick={handleSubmit}
                >
                  Abonnieren
                </Button>
              </div>
            </>
          )}
        </motion.div>
      </Container>
    </section>
  );
};

export default CTA;
