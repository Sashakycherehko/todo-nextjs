import React from "react";
import { CenterContainer } from "../../components/centerContainer/centerContainer";
import RootLayout from "../../layout";
import { ChangeColorThemeButtons } from "@/app/components/optionForGroups/changeColorTheme/changeColorThemeButtons";

export const Home = (): React.ReactNode => {
  return (
    <>
      <RootLayout>
        <h1>importand</h1>
        <ChangeColorThemeButtons />
      </RootLayout>
    </>
  );
};

export default Home;
