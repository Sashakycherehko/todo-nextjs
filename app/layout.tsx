"use client";
import { Provider } from "react-redux";
import { store } from "@/app/container/store-action";
import "./globals.scss";
const metadata = {
  title: "Home Page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Provider>
  );
}
