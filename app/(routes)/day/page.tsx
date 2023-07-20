import RootLayout from "../../layout";
import { CenterContainer } from "../../components/centerContainer/centerContainer";
import DayLayout from "./layout";
import GeneratesButtons from "@/app/components/optionForGroups/changeColorTheme/GeneratesButtons";

export const Day = () => {
  return (
    <>
      <CenterContainer>
        <h1>Day</h1>
        <GeneratesButtons />
      </CenterContainer>
    </>
  );
};

export default Day;
