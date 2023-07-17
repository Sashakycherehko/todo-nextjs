import React from "react";
import ImportandLayout from "./layout";
import MainContainer from "../components/mainContainer/layout";
import Navigation from "../components/navigation/navigation";
import { CenterContainer } from "../components/centerContainer/centerContainer";

export const Home = (): React.ReactNode => {
  return (
    <>
      <ImportandLayout>
        <MainContainer>
          <Navigation />
          <CenterContainer backgroundColor="red">
            <h1>importand</h1>
          </CenterContainer>
        </MainContainer>
      </ImportandLayout>
    </>
  );
};

export default Home;
