"use client";
import Link from "next/link";
import { IList } from "../../groups/list-menu/types";

export const ListMenu = () => {
  const lists: Array<IList> = [
    { id: 0, title: "today", path: "/groups/today" },
    { id: 1, title: "inbox", path: "/groups/inbox" },
    { id: 2, title: "upComing", path: "/groups/upComing" },
    { id: 3, title: "filter", path: "/groups/filter" },
  ];
  return (
    <>
      {lists.map((item) => (
        <>
          <Link key={item.title} href={{ pathname: item.path }}>
            {item.title.toUpperCase()}
          </Link>
        </>
      ))}
    </>
  );
};
