import { NextResponse } from "next/server";

export async function GET() {
  const res: Response = await fetch("https://dummyjson.com/products", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return NextResponse.json({ data });
}
