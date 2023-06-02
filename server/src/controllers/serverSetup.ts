import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";

export class ServerSetup {
  private app: express.Application;

  constructor(app: express.Application) {
    this.app = app;
    this.setup();
  }

  private setup() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cors({ origin: "*" }));
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      console.info(
        `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`
      );

      res.on("finish", () => {
        console.info(
          `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`
        );
      });

      next();
    });
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      );

      if (req.method == "OPTIONS") {
        res.header(
          "Access-Control-Allow-Methods",
          "PUT, POST, PATCH, DELETE, GET"
        );
        return res.status(200).json({});
      }

      next();
    });
  }
}
