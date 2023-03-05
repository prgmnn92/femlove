import React from "react";

const ThankYou = ({ isNewsletter }) => {
  let message = isNewsletter
    ? "Vielen Dank, dass du dich für meinen Newsletter angemeldet hast! Ich schätze deine Unterstützung sehr."
    : "Vielen Dank, für deine Nachricht! Ich schätze deine Unterstützung sehr.";
  return <div className="p-4">{message}</div>;
};

export default ThankYou;
