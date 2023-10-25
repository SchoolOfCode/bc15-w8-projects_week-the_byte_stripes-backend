import * as eventsModel from "./events.model.js";

export async function getEvents(req, res) {
  
  const events = await eventsModel.getEvents();


  res.json({
    success: true,
    payload: events,
  });
}

export async function updateEventAttendees(req, res) {
  const id = req.params.id;
  const updatedEvent = await eventsModel.updateEventAttendees(id);

  res.json({
    success: true,
    payload: updatedEvent,
  });

}