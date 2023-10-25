import { pool } from "../db/index.js";

export async function getEvents() {
  const data = await pool.query("SELECT * FROM events ORDER BY date ASC;");
  return data.rows;
}

//Patch function

export async function updateEventAttendees(id) {
  const queryText = `
  UPDATE events
  SET attendees = attendees + 1
  WHERE id = $1
  RETURNING *;
  `;
  
  const result = await pool.query(queryText, [id]);
  return result.rows[0] || null;
}