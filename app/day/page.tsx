import DayLayout from "./layout";
import MainContainer from "../components/mainContainer/layout";
import Navigation from "../components/navigation/navigation";

export const Day = () => {
  return (
    <>
      <DayLayout>
        <MainContainer>
          <Navigation />
          <h1>My Day</h1>
        </MainContainer>
      </DayLayout>
    </>
  );
};

export default Day;
