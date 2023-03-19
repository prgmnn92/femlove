import React from "react";

const ThankYou = ({ isNewsletter }) => {
  let message = isNewsletter
    ? "Danke, dass du dich für meinen Newsletter angemeldet hast. Willkommen in meiner Femlove-Community."
    : "Danke für deine Nachricht. Ich werde mich in Kürze bei dir melden!";
  return <div className="p-4">{message}</div>;
};

export default ThankYou;
