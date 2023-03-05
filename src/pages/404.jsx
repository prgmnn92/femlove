import React from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import Container from "@/components/Container";

const FourOhFour = () => {
  return (
    <Layout>
      <Container
        className={"min-h-[80vh] flex justify-center items-center flex-col"}
      >
        <h1>404 - Page Not Found</h1>
        <Link className="mt-4" href="/">
          <p className="px-4 py-2 text-white rounded-full bg-f-red">
            Go back home
          </p>
        </Link>
      </Container>
    </Layout>
  );
};

export default FourOhFour;
