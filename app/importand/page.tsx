import React from "react";
import { list_links } from "@/app/components/navigation/navigation";
import RootLayout from "@/app/importand/layout";
import Navigation from "@/app/components/navigation/navigation";

export const Home = (): React.ReactNode => {
  return (
    <>
      <RootLayout>
        <Navigation />
        <h1>importand</h1>
      </RootLayout>
    </>
  );
};

export default Home;
