import { useState } from "react";

export const ButtonMenu = ({
  onclick,
}: {
  onclick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <>
      <button onClick={onclick}>Press</button>
    </>
  );
};
