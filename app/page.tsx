"use client";
import { useState } from "react";
import "../app/globals.scss";
import { ContentWrapper } from "./components/content-wrapper/ContentWrapper";
import { Groups } from "./components/groups/Groups";
import { Navigation } from "./components/navigation/Navigation";
import { ButtonHome } from "./components/navigation/ButtonHome";
import { ButtonMenu } from "./components/navigation/ButtonMenu";
import { ButtonProfile } from "./components/navigation/profile/ButtonProfile";
import { ListMenu } from "./components/groups/list-menu/ListMenu";
import { ListProjects } from "./components/groups/list-projects/ListProjects";
export const Home = () => {
  const [isShownGrouprs, setIsShownGroups] = useState(true);
  const [isShownGrouprsView, setIsShownGroupsView] = useState(false);
  const [isShownGrouprsProjects, setIsShownGroupsProjects] = useState(false);

  const handleClickShownMenu = (e: React.MouseEvent) =>
    setIsShownGroups(!isShownGrouprs);
  const handleClickShownView = (e: React.MouseEvent) =>
    setIsShownGroups(!isShownGrouprsView);
  const handleClickShownProjects = (e: React.MouseEvent) =>
    setIsShownGroups(!isShownGrouprsProjects);
  return (
    <>
      <ContentWrapper>
        <Navigation>
          <ButtonHome />
          <ButtonMenu onclick={handleClickShownMenu} />
          <ButtonProfile />
        </Navigation>
        {isShownGrouprs && (
          <Groups>
            <ListMenu onclick={handleClickShownView} />
            <ListProjects />
          </Groups>
        )}
      </ContentWrapper>
    </>
  );
};

export default Home;
