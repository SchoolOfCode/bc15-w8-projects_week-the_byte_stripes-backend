import express from "express";
import morgan from "morgan";
// import { todosRouter } from "./todos/todos.router.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
    //point to the nameFolder
// app.use(express.static("nameFolder"));

// app.use("/api/todos", todosRouter);

export default app;
