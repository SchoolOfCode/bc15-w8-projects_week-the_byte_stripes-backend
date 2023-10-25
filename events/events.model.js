import { pool } from "../db/index.js";

export async function getEvents() {
  const data = await pool.query("SELECT * FROM events ORDER BY date ASC;");
  return data.rows;
}