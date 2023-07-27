"use client";
import { WhatDoYouNeed } from "@/app/components/whatDoYouNeed/WhatDoYouNeed";
import { getDate } from "./(date)/getDate";
import React, { useState } from "react";
import { AddTask } from "@/app/components/addTask/AddTask";
import { ChoiceGroup } from "@/app/components/addTask/ChoiceGroup";
import { ChoicePriority } from "@/app/components/addTask/ChoicePrority";
import { InputTaskName } from "@/app/components/addTask/inputTaskName/InputTaskName";
import { InputTaskDescription } from "@/app/components/addTask/inputTaskDescription/InputTaskDescription";
import { ButtonCancel } from "@/app/components/addTask/ButtonCancel";
import { ButtonAccept } from "@/app/components/addTask/ButtonAccept";
import { ChoiceDate } from "@/app/components/addTask/ChoiceDate/ChoiceDate";

function Today(): React.ReactNode {
  const [isShownComponentWhatDoYouNeed, SetisShownComponentWhatDoYouNeed] =
    useState<boolean>(true);

  const [isShownComponentAddTask, SetisShownComponentAddTask] = useState(false);

  const handleClick = () => {
    SetisShownComponentWhatDoYouNeed(false);
    SetisShownComponentAddTask(true);
  };
  return (
    <>
      <h1>Today</h1>
      <p></p>
      {getDate()}
      {isShownComponentWhatDoYouNeed && <WhatDoYouNeed />}
      {isShownComponentAddTask ? (
        <AddTask>
          <InputTaskName />
          <InputTaskDescription />
          <ChoiceDate>
            <h1>Date</h1>
          </ChoiceDate>
          <ChoiceGroup />
          <ChoicePriority />
          <ButtonCancel />
          <ButtonAccept />
        </AddTask>
      ) : (
        <button onClick={handleClick}>Add Todo Task</button>
      )}
    </>
  );
}

export default Today;
