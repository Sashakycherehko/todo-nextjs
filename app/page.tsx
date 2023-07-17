import Link from "next/link";
import "../app/globals.scss";
import Navigation from "./components/navigation/navigation";
import MainContainer from "./components/mainContainer/layout";
import RootLayout from "./layout";

export default function Home() {
  return (
    <RootLayout>
      <MainContainer>
        <Navigation />
      </MainContainer>
    </RootLayout>
  );
}
