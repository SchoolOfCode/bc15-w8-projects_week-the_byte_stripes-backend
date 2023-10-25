import { pool } from "../index.js";
import { resetAllTables } from "../helpers.js";

try {
  const insertedRows = await resetAllTables([
    { 
    event_title: "bootcamper meet up",
    date: "2023-01-01",
    time : "10:00",
    location: "Zoom",
    event_type: "Social",
    attendees: 30 },
    { 
      event_title: "Bootcampers Study Group",
      date: "2023-10-25",
      time : "12:00",
      location: "London",
      event_type: "Social",
      attendees: 15
      }
    
  ]);
  console.log("Reset all tables and inserted data");
  console.log(insertedRows);
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}
