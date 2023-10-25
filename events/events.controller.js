import * as eventsModel from "./events.model.js";

export async function getEvents(req, res) {
  
  const events = await eventsModel.getEvents();


  res.json({
    success: true,
    payload: events,
  });
}