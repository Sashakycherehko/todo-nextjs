"use client";
import { ButtonHome } from "./ButtonHome";
import { ButtonMenu } from "./ButtonMenu";
import { ButtonProfile } from "./profile/ButtonProfile";
export const Navigation = (): React.ReactNode => {
  return (
    <>
      <nav>
        <ButtonHome />
        <ButtonMenu></ButtonMenu>
        <ButtonProfile />
      </nav>
    </>
  );
};
