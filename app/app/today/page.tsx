"use client";
import { LeftMenu } from "@/app/components/left_menu/left_menu";
import { MainContainer } from "@/app/components/main-container/main_container";
import { MainSection } from "@/app/components/main-section/main_section";
import { AddTask } from "@/app/components/modals-window/add-task/add_task";
import { Navigation } from "@/app/components/navigation/navigation";
import { useState } from "react";

export const Today = (): React.ReactNode => {
  const [isOpenMenu, setOpenMenu] = useState<boolean>(true);
  const [isOpenModelAddTask, setOpenModelAddTask] = useState<boolean>(false);
  return (
    <>
      <Navigation
        StateMenu={{
          stateSetOpenMenu: setOpenMenu,
          stateIsOpenMenu: isOpenMenu,
        }}
        StateAddTask={{
          stateSetOpenModalTask: setOpenModelAddTask,
          stateIsOpenModalTask: isOpenModelAddTask,
        }}
      >
        {<></>}
      </Navigation>
      {isOpenModelAddTask && (
        <AddTask
          StateAddTask={{
            stateSetOpenModalTask: setOpenModelAddTask,
            stateIsOpenModalTask: isOpenModelAddTask,
          }}
        />
      )}

      <MainContainer>
        {isOpenMenu && <LeftMenu />}
        <MainSection />
      </MainContainer>
    </>
  );
};

export default Today;
