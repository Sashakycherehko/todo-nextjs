"use client";
import Link from "next/link";

export const LeftMenu = () => {
  return (
    <>
      <section className="left-menu">
        <div className="left-menu_groups">
          <div className="left-menu_links">
            <Link href={{ href: "inbox" }}>Inbox</Link>
          </div>
          <div className="left-menu_links">
            <Link href={{ href: "today" }}>Today</Link>
          </div>
          <div className="left-menu_links">
            <Link href="app/upcoming">Upcoming</Link>
          </div>
          <div className="left-menu_links">
            <Link href="app/filter">Filter & Labels</Link>
          </div>
        </div>
        <div className="left-menu_projects"></div>
      </section>
    </>
  );
};
