"use client";
import { Database } from "./lib/database";

import "../app/globals.scss";
import { DatePicker } from "./components/dataPicker/DataPicker";

function Home(): React.ReactNode {
  return (
    <>
      <h1>Home</h1>
      <DatePicker />
    </>
  );
}

export default Home;
