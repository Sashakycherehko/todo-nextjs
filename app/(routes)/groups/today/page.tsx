import { getDate } from "./(date)/getDate";

export const Today = () => {
  return (
    <>
      <h1>Today</h1>
      {getDate()}
    </>
  );
};

export default Today;
