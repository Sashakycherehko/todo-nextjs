import Link from "next/link";
import "../app/globals.scss";
import RootLayout from "./layout";
import Navigation from "./components/navigation/navigation";

export const Home = () => {
  return (
    <RootLayout>
      <Navigation />
      <h1>Home</h1>
    </RootLayout>
  );
};

export default Home;
