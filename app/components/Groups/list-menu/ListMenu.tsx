import { IList } from "./types";
export const ListMenu = ({
  onclick,
}: {
  onclick: React.MouseEventHandler<HTMLLIElement>;
}) => {
  const lists: Array<IList> = [
    { id: 0, title: "Today" },
    { id: 1, title: "Inbox" },
    { id: 2, title: "UpComing" },
    { id: 3, title: "Filter" },
  ];
  return (
    <>
      {lists.map((item) => (
        <>
          <li key={item.id} onClick={onclick}>
            {item.title}
          </li>
        </>
      ))}
    </>
  );
};
