"use client";

export const Navigation = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  return (
    <>
      <nav className="navigation">{children}</nav>
    </>
  );
};
