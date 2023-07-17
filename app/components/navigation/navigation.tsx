import Link from "next/link";
import avatar from "../../../public/images/avatar.jpg";

interface ParamLinks {
  title_links: string;
  name_path: string;
}
export const list_links: Array<ParamLinks> = [
  { title_links: "My Day", name_path: "day" },
  { title_links: "Importand", name_path: "importand" },
  { title_links: "Planned", name_path: "planned" },
  { title_links: "All", name_path: "all" },
  { title_links: "Completed", name_path: "completed" },
  { title_links: "Assigned to me", name_path: "assignedToMe" },
  { title_links: "Tasks", name_path: "tasks" },
];

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
          {list_links.map((item) => (
            <li key={item.title_links}>
              <Link href={`/${item.name_path}`}>{item.name_path}</Link>
            </li>
          ))}
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
  );
};

export default Navigation;
