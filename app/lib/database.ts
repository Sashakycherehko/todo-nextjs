"use server";
import { Client } from "pg";

export async function Database() {
  const client = new Client({
    host: "localhost",
    port: 5334,
    database: "5432",
    user: "postgres",
  });
  await client.connect();
  const result = await client.query("SELECT NOW()");
  console.log(result);
  await client.end();
}
