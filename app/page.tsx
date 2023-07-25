"use client";
import { useState } from "react";
import "../app/globals.scss";
import { ContentWrapper } from "./components/content-wrapper/ContentWrapper";
import { Groups } from "./components/Groups/Groups";
import { Navigation } from "./components/navigation/Navigation";
import { ButtonHome } from "./components/navigation/ButtonHome";
import { ButtonMenu } from "./components/navigation/ButtonMenu";
import { ButtonProfile } from "./components/navigation/profile/ButtonProfile";
export const Home = () => {
  const [isShownGrouprs, setIsShownGroups] = useState(false);

  const handleClickShownMenu = (e: React.MouseEvent) =>
    setIsShownGroups(!isShownGrouprs);
  return (
    <>
      <ContentWrapper>
        <Navigation>
          <ButtonHome />
          <ButtonMenu onclick={handleClickShownMenu} />
          <ButtonProfile />
        </Navigation>
        {isShownGrouprs && <Groups />}
      </ContentWrapper>
    </>
  );
};

export default Home;
