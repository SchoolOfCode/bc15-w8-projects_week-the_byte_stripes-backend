import { Router } from "express";

import {
    getEvents
  } from "./events.controller.js";

  export const eventsRouter = Router();

  eventsRouter.get("/", getEvents);

 // export default router;