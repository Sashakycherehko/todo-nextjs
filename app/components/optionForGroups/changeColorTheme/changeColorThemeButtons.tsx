"use client";
import { useState } from "react";
import { list_color } from "./dataColor";

export const ChangeColorThemeButtons = (): React.ReactNode => {
  const [Backgroundcolor, setBackgroundColor] = useState("red");

  const list_buttons = list_color.map((item) => (
    <button
      onClick={() => setBackgroundColor(item.Backgroundcolor)}
      style={{ background: item.Backgroundcolor, color: item.font_color }}
      className="button"
    ></button>
  ));
  return (
    <>
      <body style={{ background: Backgroundcolor }}></body>
      {list_buttons}
    </>
  );
};
