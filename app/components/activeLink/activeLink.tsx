"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { list_links } from "../navigation/pathPage";
interface IProps {
  children: React.ReactNode;
  href: string;
}

const ActiveLink = ({ children, href }: IProps): React.ReactNode => {
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

export const CustomLinks = (): React.ReactNode => {
  let links = list_links.map((item) => (
    <>
      <ActiveLink href={item.name_path}>{item.title_links}</ActiveLink>
    </>
  ));
  return <>{links}</>;
};

export default CustomLinks;
