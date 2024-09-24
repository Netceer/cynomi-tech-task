import type { Request, Response } from "express";
import * as db from "../db/index.js";
import { convertTimestampToDate } from "../utils.ts";

export async function CreateSleepEntryHandler(req: Request, res: Response) {
  const { name, gender, hoursSlept, date } = req.body;
  let convertedDate = convertTimestampToDate(date);

  let existingUser = await db.query(
    `
    SELECT * FROM USERS
    WHERE name = $1
    AND gender = $2
    LIMIT 1
    `,
    [name, gender]
  );

  // Create user if doesn't already exist
  if (existingUser.rowCount && existingUser.rowCount > 0) {
    let id = existingUser.rows[0].id;

    await db.query(
      `
        INSERT INTO sleep_entries
        ("hoursSlept", date, "userID")
        VALUES ($1, $2, $3)`,
      [hoursSlept, convertedDate, id]
    );
  } else {
    const newUser = await db.query(
      `
        INSERT INTO USERS
        (name, gender)
        VALUES ($1, $2)
        RETURNING id`,
      [name, gender]
    );

    await db.query(
      `
        INSERT INTO sleep_entries
        ("hoursSlept", date, "userID")
        VALUES ($1, $2, $3)`,
      [hoursSlept, convertedDate, newUser.rows[0].id]
    );
  }

  res.end();
}
