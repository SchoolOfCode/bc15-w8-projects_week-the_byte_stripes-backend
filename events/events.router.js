import { Router } from "express";

import {
    getEvents,
    updateEventAttendees
  } from "./events.controller.js";

  export const eventsRouter = Router();

  eventsRouter.get("/", getEvents);
  eventsRouter.patch("/:id", updateEventAttendees);

//  export default eventsRouter;