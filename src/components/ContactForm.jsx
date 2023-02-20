import React, { useState } from "react";
import Button from "./Button";

const ErrorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 inline mr-2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
    />
  </svg>
);

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validierung
    const errors = {};
    if (!name) {
      errors.name = "Bitte gib deinen Namen ein";
    }
    if (!email) {
      errors.email = "Bitte gib deine E-Mail-Adresse ein";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Bitte gib eine gültige E-Mail-Adresse ein";
    }
    if (!message) {
      errors.message = "Bitte gib eine Nachricht ein";
    }

    if (Object.keys(errors).length === 0) {
      // Hier könntest du z.B. den Formular-Inhalt an einen Server senden
      console.log("Formular abgeschickt:", { name, email, message });
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setErrors(errors);
    }
  };

  return (
    <form
      className="grid gap-4 max-w-md mx-auto"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="grid gap-1">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-f-green focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
        />
        {errors.name && (
          <div className="flex items-center text-red-700">
            <ErrorIcon />
            <span>{errors.name}</span>
          </div>
        )}
      </div>
      <div className="grid gap-1">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-f-green focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
        />
        {errors.email && (
          <div className="flex items-center text-red-700">
            <ErrorIcon />
            <span>{errors.email}</span>
          </div>
        )}
      </div>
      <div className="grid gap-1">
        <label htmlFor="message">Nachricht</label>
        <textarea
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={
            "min-h-[150px] w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-f-green focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
          }
        />
        {errors.message && (
          <div className="flex items-center text-red-700">
            <ErrorIcon />
            <span>{errors.message}</span>
          </div>
        )}
      </div>
      <div className="text-center">
        <Button className={"bg-f-green text-white"} type="submit">
          Abschicken
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
