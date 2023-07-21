"use client";
import { useState } from "react";
import styles from "./centerContainer.module.scss";
import { list_color } from "../optionForGroups/changeColorTheme/dataColor";

export const CenterContainer = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  return (
    <>
      <div className="centerContainer">{children}</div>
    </>
  );
};
