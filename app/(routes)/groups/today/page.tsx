"use client";
import { WhatDoYouNeed } from "@/app/components/whatDoYouNeed/WhatDoYouNeed";
import { getDate } from "./(date)/getDate";
import { useState } from "react";
import { AddTask } from "@/app/components/addTask/AddTask";
import { ChoiceGroup } from "@/app/components/addTask/ChoiceGroup";
import { ChoicePriority } from "@/app/components/addTask/ChoicePrority";

export const Today = () => {
  const [isShownComponentWhatDoYouNeed, SetisShownComponentWhatDoYouNeed] =
    useState(true);

  const [isShownComponentAddTask, SetisShownComponentAddTask] = useState(false);

  const handleClick = () => {
    SetisShownComponentWhatDoYouNeed(false);
    SetisShownComponentAddTask(true);
  };
  return (
    <>
      <h1>Today</h1>
      {getDate()}
      {isShownComponentWhatDoYouNeed && <WhatDoYouNeed />}
      {isShownComponentAddTask ? (
        <AddTask>
          <ChoiceGroup />
          <ChoicePriority />
        </AddTask>
      ) : (
        <button onClick={handleClick}>Add Todo Task</button>
      )}
    </>
  );
};

export default Today;
