import React from "react";
import { CenterContainer } from "../../components/centerContainer/centerContainer";
import RootLayout from "../../layout";

export const Home = (): React.ReactNode => {
  return (
    <>
      <RootLayout>
        <CenterContainer backgroundColor="red">
          <h1>importand</h1>
        </CenterContainer>
      </RootLayout>
    </>
  );
};

export default Home;
