"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
interface IProps {
  children: React.ReactNode;
  href: string;
}

export const ActiveLink = ({ children, href }: IProps): React.ReactNode => {
  const route = useRouter();
  const handleClick = (e: React.MouseEvent) => {
    alert(href);
    route.push(href);
  };
  return (
    <>
      <Link href={href} onClick={handleClick}>
        {children}
      </Link>
    </>
  );
};

export default ActiveLink;
