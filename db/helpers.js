import { pool } from "./index.js";

/**
 * @param {{ task: string; completion_date: string }[]} data
 */
export async function resetAllTables(data) {
  // If you're unsure about DROP TABLE, see: https://www.postgresql.org/docs/current/sql-droptable.html
  // If you're unsure about NOT NULL, see: https://www.postgresql.org/docs/current/ddl-constraints.html#id-1.5.4.6.6
  await pool.query(`
    DROP TABLE IF EXISTS events;
    CREATE TABLE events (
      id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      event_title VARCHAR(200) NOT NULL,
      date DATE NOT NULL,
      time TIME NOT NULL,
      location VARCHAR(200) NOT NULL,
      event_type VARCHAR(200) NOT NULL,
      attendees INTEGER DEFAULT 0
    );
  `);

  const inserted = await pool.query(
    `INSERT INTO events (
      event_title,
      date,
      time,
      location,
      event_type,
      attendees
    ) (
      "bootcamper meet up",
      "2023-01-01",
      "10:00",
      "Zoom",
      "Social",
      30
      )
;`);

  return inserted.rows;
}

    //   FROM json_populate_recordset(NULL::events, $1::JSON)
    // )