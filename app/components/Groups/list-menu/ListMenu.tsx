export const ListMenu = ({
  onclick,
}: {
  onclick: React.MouseEventHandler<HTMLLIElement>;
}) => {
  const lists: Array<String> = ["Today", "Inbox", "UpComing", "Filter"];
  return (
    <>
      <ul>
        {lists.map((item) => (
          <>
            <li onClick={onclick}>{item}</li>
          </>
        ))}
      </ul>
    </>
  );
};
