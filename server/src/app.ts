import dotenv from "dotenv";
dotenv.config();
import "reflect-metadata";
import express, { Application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { CreateSleepEntryHandler } from "./routes/CreateSleepEntryHandler.ts";
import { GetSleepEntriesHandler } from "./routes/GetSleepEntriesHandler.ts";

export const app: Application = express();

async function createServer() {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  app.get("/v1/sleepEntries", GetSleepEntriesHandler);
  app.post("/v1/sleepEntries", CreateSleepEntryHandler);
}

createServer();
