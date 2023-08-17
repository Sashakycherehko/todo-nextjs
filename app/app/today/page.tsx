"use client";
import { AddTask } from "@/components/modals-window/add-task/add_task";
import { Navigation } from "@/components/navigation/navigation";

export const Today = (): React.ReactNode => {
  return (
    <>
      <Navigation>{<></>}</Navigation>
      <AddTask />
    </>
  );
};

export default Today;
