"use client";
import { LeftMenu } from "@/components/left_menu/left_menu";
import { AddTask } from "@/components/modals-window/add-task/add_task";
import { Navigation } from "@/components/navigation/navigation";

export const Today = (): React.ReactNode => {
  return (
    <>
      <Navigation>{<></>}</Navigation>
      <AddTask />
      <LeftMenu />
    </>
  );
};

export default Today;
