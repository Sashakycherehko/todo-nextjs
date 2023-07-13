import style from "./mainContainer.module.scss";
export const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return <main className={style.mainContainer}>{children}</main>;
};

export default MainContainer;
