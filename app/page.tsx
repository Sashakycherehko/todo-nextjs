import Link from "next/link";
import "../app/globals.scss";
import avatar from "../public/images/avatar.jpg";
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
