"use client";
import { useState } from "react";
import "../app/globals.scss";
import { ContentWrapper } from "./components/content-wrapper/ContentWrapper";
import { Navigation } from "./components/navigation/Navigation";
import { ButtonHome } from "./components/navigation/ButtonHome";
import { ButtonMenu } from "./components/navigation/ButtonMenu";
import { ButtonProfile } from "./components/navigation/profile/ButtonProfile";
import { ListProjects } from "./components/Groups/list-projects/ListProjects";
import { Groups } from "./components/Groups/Groups";
import { ListMenu } from "./components/Groups/list-menu/ListMenu";
import { MainView } from "./components/mainView/MainView";
export const Home = () => {
  const [isShownGrouprs, setIsShownGroups] = useState(true);
  const [isShownGrouprsView, setIsShownGroupsView] = useState("Today");
  const [isShownGrouprsProjects, setIsShownGroupsProjects] = useState(false);

  const handleClickShownMenu = (e: React.MouseEvent) =>
    setIsShownGroups(!isShownGrouprs);
  const handleClickShownView = (e: React.ChangeEvent) => {
    let value = e.target.innerHTML;

    setIsShownGroupsView(value);
  };

  const handleClickShownProjects = (e: React.MouseEvent) => {
    setIsShownGroups(!isShownGrouprsProjects);
  };
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
        <MainView>{switch (isShownGrouprsView) {
          case value:
            
            break;
        
          default:
            break;
        }}</MainView>
      </ContentWrapper>
    </>
  );
};

export default Home;
