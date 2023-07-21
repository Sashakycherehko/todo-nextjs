"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import avatar from "../../../public/images/avatar.jpg";
import ActiveLink, { CustomLinks } from "../activeLink/activeLink";
import { list_links } from "./pathPage";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation-profile">
        <img src={avatar.src} alt="avatar" />
        <div className="profile-nameAndEmail">
          <h3 className="name">Александр Кучеренко</h3>
          <p className="email">sashakycherehko@gmail.com</p>
        </div>
      </div>
      <div className="navigation-search">
        <input type="search" />
      </div>
      <div className="navigation-groups">
        <ul>
          <CustomLinks />
        </ul>
      </div>
      <div className="navigation-lists">
        <div className="lists-list">
          <ul></ul>
        </div>
        <div className="lists-addNewList">
          <button className="button">New List</button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
