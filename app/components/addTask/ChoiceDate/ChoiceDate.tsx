"use client";

import { useState } from "react";

export const ChoiceDate = ({ children }: { children: React.ReactNode }) => {
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
          <div className="choice-date">{children}</div>
        </>
      )}
    </>
  );
};
