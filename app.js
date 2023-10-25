import express from "express";
import morgan from "morgan";
// import { eventsRouter } from "./events/events.router.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
    //point to the nameFolder
// app.use(express.static("nameFolder"));

// app.use("/api/events", eventsRouter);

export default app;
