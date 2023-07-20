export const GeneratesButtons = (): React.ReactNode => {
  const list: Array<React.ReactNode> = [];
  for (let i: number = 0; i < 5; i++) {
    list.push(
      <>
        <button>st</button>
      </>
    );

    console.log(list);
  }

  return (
    <>
      <div>{list}</div>
    </>
  );
};

export default GeneratesButtons;
