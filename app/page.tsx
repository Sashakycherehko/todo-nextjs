"use client";
import { redirect } from "next/navigation";
import "../app/globals.scss";

export function Home(): React.ReactNode {
  redirect("/app/today");
  return <h1>Home</h1>;
}

export default Home;
