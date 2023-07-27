"use client";
import { Day } from "../../dataPicker/dataYear";

import { useState } from "react";

export const ChoiceDate = ({ children }: { children: React.ReactNode }) => {
  let { date, day_number, string_date } = new Day();
  const [isShown, SetShown] = useState<Boolean>(false);
  return (
    <>
      <button onClick={() => SetShown(!isShown)}>Today</button>
      {isShown && (
        <>
          <div
            className="popper__overlay"
            onClick={() => SetShown(!isShown)}
          ></div>
          <div className="choice-date">{day}</div>
        </>
      )}
    </>
  );
};
