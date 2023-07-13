import Link from "next/link";
import "../app/globals.scss";
import avatar from "../public/images/avatar.jpg";

export default function Home() {
  return (
    <>
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
            <Link href="/day">Home</Link>
            <li>Importand</li>
            <li>Planned</li>
            <li>All</li>
            <li>Completed</li>
            <li>Assigned to me</li>
            <li>Tasks</li>
          </ul>
        </div>
        <div className="navigation-lists">
          <div className="lists-list">
            <ul>
              <li>University list</li>
            </ul>
          </div>
          <div className="lists-addNewList">
            <button className="button">new list</button>
          </div>
        </div>
      </nav>
    </>
  );
}
