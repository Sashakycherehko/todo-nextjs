import { LeftMenu } from "@/components/left_menu/left_menu";
import { MainContainer } from "@/components/main-container/main_container";
import { MainSection } from "@/components/main-section/main_section";
import { AddTask } from "@/components/modals-window/add-task/add_task";
import { Navigation } from "@/components/navigation/navigation";
import { useState } from "react";

export const Today = (): React.ReactNode => {
  const [isOpenMenu, setOpenMenu] = useState<boolean>();
  return (
    <>
      <Navigation>{<></>}</Navigation>
      <AddTask />

      <MainContainer>
        <LeftMenu />
        <MainSection />
      </MainContainer>
    </>
  );
};

export default Today;
