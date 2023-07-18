import styles from "./centerContainer.module.scss";
export const CenterContainer = ({
  children,
  backgroundColor,
}: {
  children: React.ReactNode;
  backgroundColor?: string;
}): React.ReactNode => {
  return (
    <>
      <div className="centerContainer" style={{ backgroundColor }}>
        {children}
      </div>
    </>
  );
};
