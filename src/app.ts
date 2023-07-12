import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import bodyParser from "body-parser";
// import "./config/db";

import userRouter from "./routes/user.route";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.sendFile(__dirname + "/./views/index.html");
});

// route not found error
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    message: "route not found",
  });
});

// handling server error
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    message: "something broke",
  });
});

export default app;
