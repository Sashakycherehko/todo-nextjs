import { useState } from "react";

interface IProps {
  children: React.ReactElement;
}

export const ButtonMenu = ({
  children,
}: {
  children?: React.ReactNode;
}): React.ReactNode => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (e: React.MouseEvent) => setIsShown(!isShown);

  return (
    <>
      <button onClick={handleClick}>Menu</button>
      {isShown && children}
    </>
  );
};
