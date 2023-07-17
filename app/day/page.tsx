import RootLayout from "./layout";
import MainContainer from "../components/mainContainer/layout";
import Navigation from "../components/navigation/navigation";

export const Day = () => {
  return (
    <>
      <RootLayout>
        <MainContainer>
          <Navigation />
          <div>day</div>
        </MainContainer>
      </RootLayout>
    </>
  );
};

export default Day;
