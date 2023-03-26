import React from "react";

import Link from "next/link";

import Container from "@/components/Container";

const FourOhFour = () => {
  return (
    <>
      <Container
        className={"min-h-[80vh] flex justify-center items-center flex-col"}
      >
        <h1>404 - Page Not Found</h1>
        <Link className="mt-4" href="/">
          <p className="px-4 py-2 text-white rounded-full bg-f-red">
            Zurück zur Startseite
          </p>
        </Link>
      </Container>
    </>
  );
};

export default FourOhFour;
