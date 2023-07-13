import RootLayout from "./layout";
import MainContainer from "../components/mainContainer/layout";
import Home from "../page";

export const Day = () => {
  return (
    <>
      <RootLayout>
        <MainContainer>
          <Home />
          <div>day</div>
        </MainContainer>
      </RootLayout>
    </>
  );
};

export default Day;
