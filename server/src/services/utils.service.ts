import { NextFunction, Request, Response } from "express";
import { Err } from "../types";

export const handleError = (
  err: Err,
  req?: Request,
  res?: Response,
  next?: NextFunction
) => {
  console.log(err);

  if (res) {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Something went wrong. Try again later.";

    res.status(status).json({ message });
  }

  next!();
};
