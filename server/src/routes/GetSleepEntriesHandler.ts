import type { Request, Response } from "express";
import * as db from "../db/index.js";

export async function GetSleepEntriesHandler(req: Request, res: Response) {
  let results = await db.query(
    `
        SELECT COUNT(DISTINCT "date"), users.name, users.gender FROM sleep_entries 
        JOIN users ON users.id = sleep_entries."userID" 
        GROUP BY "name", "gender"
        ORDER BY COUNT DESC`
  );

  res.json(results.rows);
}
