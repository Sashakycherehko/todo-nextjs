"use client";
import { ButtonHome } from "./ButtonHome";
import { ButtonProfile } from "./profile/ButtonProfile";

import { useState } from "react";

interface IProps {
  children: React.ReactElement;
}
export const Navigation = (): React.ReactNode => {
  const [isShownGrouprs, setIsShownGroups] = useState(false);

  const handleClickShownMenu = (e: React.MouseEvent) =>
    setIsShownGroups(!isShownGrouprs);
  return (
    <>
      <nav>
        <ButtonHome />
        <button className="button-menu" onClick={handleClickShownMenu}>
          Menu
        </button>
        <ButtonProfile />

        {isShownGrouprs && <ButtonProfile />}
      </nav>
    </>
  );
};
